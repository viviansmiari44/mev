import {
  ArrowLeftRight,
  Radar,
  Shield,
  ChartCandlestick,
  Headset,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: ArrowLeftRight,
    title: "MEV & Arbitrage Strategies",
    text: "Deploy advanced MEV and crypto arbitrage strategies through a refined platform built for speed, precision, and execution efficiency.",
  },
  {
    icon: Radar,
    title: "Real-Time Market Analysis",
    text: "Track live market conditions, pricing inefficiencies, and execution signals with a clear, professional analytics experience.",
  },
  {
    icon: Shield,
    title: "Advanced Risk Management",
    text: "Maintain stronger operational control with structured monitoring, decision support, and risk-focused execution visibility.",
  },
  {
    icon: ChartCandlestick,
    title: "Performance Dashboard",
    text: "Analyze system activity, monitor trading performance, and review key metrics through a polished dashboard interface.",
  },
  {
    icon: Headset,
    title: "24/7 Monitoring & Support",
    text: "Benefit from continuous platform oversight and support-oriented infrastructure designed for round-the-clock reliability.",
  },
  {
    icon: Zap,
    title: "Fast Execution Infrastructure",
    text: "Leverage a high-performance infrastructure layer engineered to support rapid execution, low latency, and smooth trading operations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
            Features
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Professional tools for serious operators
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400">
            Flash Extract MEV brings together modern fintech design, execution-focused tooling, and professional-grade monitoring for a premium trading experience.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:bg-white/[0.05]"
              >
                <CardContent className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10B981]/10 text-[#10B981]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}