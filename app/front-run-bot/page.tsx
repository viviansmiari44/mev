"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Radar,
  Zap,
  ChartCandlestick,
  Wallet,
  Settings2,
  Activity,
  Lock,
  Server,
  CircleDollarSign,
  Layers3,
  CheckCircle2,
  BadgeHelp,
  TimerReset,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WalletModalPlaceholder from "@/components/wallet-modal-placeholder";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const whyFrontRun = [
  {
    icon: Zap,
    title: "Execution-Speed Positioning",
    text: "A front-run bot page should present speed, routing, and reaction time as the core product narrative for users seeking low-latency market execution tooling.",
  },
  {
    icon: Radar,
    title: "Opportunity Detection",
    text: "The product story centers on identifying time-sensitive market opportunities and responding through a fast, analytics-driven workflow.",
  },
  {
    icon: CircleDollarSign,
    title: "High-Frequency Trade Logic",
    text: "This page frames front-running as a speed-sensitive trading category where infrastructure quality, timing, and monitoring are positioned as critical.",
  },
];

const steps = [
  {
    number: "01",
    icon: Wallet,
    title: "Connect Your Wallet",
    text: "Start with a clean onboarding flow that lets users securely access the platform and prepare the interface for execution-related activity.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Configure Strategy Parameters",
    text: "Allow users to review settings, adjust timing preferences, and prepare the execution environment through a polished dashboard workflow.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Deploy & Monitor",
    text: "Launch the strategy and follow system activity, market signals, and performance metrics in real time through a premium control surface.",
  },
];

const features = [
  {
    icon: Layers3,
    title: "Advanced Front Run Strategies",
    text: "Organize speed-focused front-run workflows in a structured interface designed for fast execution and professional visibility.",
  },
  {
    icon: Radar,
    title: "Real-Time Market Analysis",
    text: "Track live transaction flow, monitor activity conditions, and review execution-sensitive signals from one unified view.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Risk Management",
    text: "Use structured controls and monitoring views to maintain stronger oversight of behavior, timing, and execution exposure.",
  },
  {
    icon: ChartCandlestick,
    title: "Performance Dashboard",
    text: "Analyze activity, inspect execution behavior, and review key metrics through a modern fintech analytics interface.",
  },
  {
    icon: Server,
    title: "24/7 Monitoring & Support",
    text: "Present the platform as an always-on environment with continuous visibility and support-oriented operating infrastructure.",
  },
  {
    icon: Lock,
    title: "Secure & Non-Custodial Design",
    text: "Position the workflow around a non-custodial model where users retain direct control of wallet access and operational setup.",
  },
];

const faqs = [
  {
    q: "What is a front run bot?",
    a: "A front run bot is generally described as a speed-focused automated trading workflow that reacts to market conditions and time-sensitive opportunities through fast execution logic.",
  },
  {
    q: "Do I need technical experience to use it?",
    a: "Not necessarily. A strong product design can make the experience easier to operate through a guided interface, even if the underlying trading category is more advanced.",
  },
  {
    q: "Is the workflow non-custodial?",
    a: "This page is written around a non-custodial product concept, meaning users should keep control over their wallet rather than transferring custody.",
  },
  {
    q: "Can execution quality vary over time?",
    a: "Yes. Outcomes depend on market conditions, competition, infrastructure quality, timing, latency, and overall risk settings. Results are never fixed.",
  },
  {
    q: "What makes this type of bot infrastructure-sensitive?",
    a: "Front-run positioning is typically tied to timing and reaction speed, so the surrounding software story usually emphasizes monitoring, routing, and execution efficiency.",
  },
  {
    q: "Can this page later include pricing or onboarding?",
    a: "Yes. It follows the same product-page pattern as the other pages, so it can easily be extended with pricing, onboarding, or deeper documentation sections.",
  },
];

export default function FrontRunBotPage() {
  return (
    <main className="min-h-screen bg-[#06080F] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24">
        <div className="absolute inset-0 grid-line opacity-60" />
        <div className="section-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_#10B981]" />
                Speed-Focused Execution Layer
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
              >
                Advanced Front Run Bot
              </motion.h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                A modern fintech landing page built around speed, execution
                visibility, monitoring, and a professional trading software
                experience for front-run strategy workflows.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <WalletModalPlaceholder
                  trigger={
                    <Button size="xl" className="group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  }
                />
                <Link href="#front-run-features">
                  <Button variant="secondary" size="xl">
                    Explore Features
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-semibold text-white">Fast</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Speed-led product positioning
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Live</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Continuous signal visibility
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">24/7</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Monitoring-focused workflow
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <Card className="hero-glow overflow-hidden rounded-[32px] bg-[#0B1019]">
                <CardContent className="p-0">
                  <div className="border-b border-white/5 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                      <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Front Run Console
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="rounded-3xl border border-white/5 bg-black/40 p-5">
                      <div className="space-y-3 font-mono text-xs text-[#10B981]">
                        <div>{">"} execution monitor initialized</div>
                        <div>{">"} timing engine synced</div>
                        <div>{">"} live transaction watcher online</div>
                        <div className="text-slate-500">
                          {">"} awaiting wallet authorization...
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Zap className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">Speed</div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Built around fast-response execution positioning.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <TimerReset className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">Timing</div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          A workflow shaped around reaction-sensitive logic.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <ChartCandlestick className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Analytics
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Monitoring and visibility in one dashboard.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
              Why This Page
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              A professional front-run product narrative
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              This page is designed to present front-run strategy software with
              a modern premium fintech layout, emphasizing speed, timing,
              monitoring, and execution visibility.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {whyFrontRun.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03]"
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

      <section className="border-y border-white/5 py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
              How It Works
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              A simple 3-step process
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              This follows the same product-page pattern you used for Solana so
              the whole site stays visually and structurally consistent.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card
                  key={step.number}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#10B981]/30"
                >
                  <CardContent className="p-7">
                    <div className="inline-flex rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-3 py-1 text-sm font-semibold tracking-[0.2em] text-[#10B981]">
                      {step.number}
                    </div>
                    <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10B981]/10 text-[#10B981]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {step.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="front-run-features" className="py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
              Core Features
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Professional tools for speed-focused operators
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              The platform experience combines advanced strategies, real-time
              analysis, risk controls, dashboards, support, and non-custodial
              positioning.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((item) => {
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

      <section className="py-20">
        <div className="section-shell">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
                  Front Run FAQ
                </div>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Frequently Asked
                  <br />
                  Questions
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                  Get answers to common questions about front-run product
                  positioning, workflow design, and onboarding.
                </p>

                <div className="mt-8 hidden lg:block">
                  <div className="rounded-[24px] border border-[#10B981]/15 bg-[#10B981]/5 p-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <BadgeHelp className="h-4 w-4 text-[#10B981]" />
                      Need help choosing a setup?
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      This page is ready to be expanded later with pricing,
                      onboarding, and plan comparison sections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((item, index) => (
                    <AccordionItem
                      key={item.q}
                      value={`item-${index}`}
                      className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.02] px-5 data-[state=open]:border-[#10B981]/25 data-[state=open]:bg-white/[0.04]"
                    >
                      <AccordionTrigger className="py-5 text-left text-base font-medium text-white hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-7 text-slate-400">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <div className="rounded-[36px] border border-[#10B981]/20 bg-[linear-gradient(180deg,rgba(16,185,129,0.14),rgba(16,185,129,0.03))] px-6 py-10 sm:px-10 sm:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
                Front Run Bot
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Launch the next product page in the same premium system
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                This page matches the same professional structure and visual
                language as the Solana page so your site stays consistent.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WalletModalPlaceholder
                  trigger={<Button size="xl">Get Started</Button>}
                />
                <Link href="/solana-mev-bot">
                  <Button variant="secondary" size="xl">
                    View Solana Page
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
                {[
                  "Original implementation",
                  
                  "Consistent product-page structure",
                 
                ].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}