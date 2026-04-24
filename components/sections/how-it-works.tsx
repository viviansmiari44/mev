import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Access the operator interface",
    text: "Enter the Flash Extract MEV environment through a clean, modern dashboard designed for speed, clarity, and professional execution.",
  },
  {
    number: "02",
    title: "Connect your wallet",
    text: "Securely connect your preferred wallet to initialize access, personalize your session, and prepare the platform for monitored trading activity.",
  },
  {
    number: "03",
    title: "Review analytics and execution status",
    text: "Inspect live market monitoring, node health, and operational signals from one unified control surface.",
  },
  {
    number: "04",
    title: "Track performance in real time",
    text: "Use the performance views and reporting blocks to analyze results, monitor system behavior, and follow ongoing trading performance.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
            How It Works
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            A simple high-end user journey
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400">
            A refined onboarding flow designed to make access, connectivity,
            analytics, and performance tracking feel seamless and professional.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:bg-white/[0.05]"
            >
              <CardContent className="p-7">
                <div className="inline-flex rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-3 py-1 text-sm font-semibold tracking-[0.2em] text-[#10B981]">
                  {step.number}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}