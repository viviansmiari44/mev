import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#10B981] text-[#03120d] hover:bg-[#18d494] shadow-[0_0_0_1px_rgba(16,185,129,0.25)_inset,0_12px_30px_rgba(16,185,129,0.18)]",
        secondary:
          "border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10",
        ghost: "text-slate-300 hover:text-white hover:bg-white/5",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-sm",
        xl: "h-14 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };