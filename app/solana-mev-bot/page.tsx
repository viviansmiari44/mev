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

const whySolana = [
  {
    icon: Zap,
    title: "High-Speed Execution Environment",
    text: "Solana is known for fast block production and high throughput, which makes it attractive for latency-sensitive MEV and arbitrage workflows.",
  },
  {
    icon: Lock,
    title: "Private Bundle Routing",
    text: "Jito bundle support is a major reason Solana MEV tooling is popular, because it can improve transaction privacy and execution reliability for certain strategies.",
  },
  {
    icon: CircleDollarSign,
    title: "Lower Transaction Costs",
    text: "Compared with more expensive chains, Solana’s fee profile can make smaller opportunities more practical to pursue at higher frequency.",
  },
];

const steps = [
  {
    number: "01",
    icon: Wallet,
    title: "Connect Your Wallet",
    text: "Start by connecting your wallet through a clean onboarding flow designed for a fast, professional setup experience.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Configure Your Strategy",
    text: "Adjust execution preferences, monitoring settings, and strategy parameters to match your trading style and risk tolerance.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Deploy & Monitor",
    text: "Launch your workflow and track activity in real time through a modern dashboard built for visibility and control.",
  },
];

const features = [
  {
    icon: Layers3,
    title: "MEV & Arbitrage Strategies",
    text: "Organize Solana-focused MEV and arbitrage workflows inside a refined interface built for fast decision-making.",
  },
  {
    icon: Radar,
    title: "Real-Time Market Analysis",
    text: "Monitor live conditions, detect dislocations, and review execution signals through a clean analytics layer.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Risk Management",
    text: "Use structured controls and monitoring views to maintain stronger visibility into strategy behavior and operational risk.",
  },
  {
    icon: ChartCandlestick,
    title: "Performance Dashboard",
    text: "Track results, inspect system activity, and evaluate performance using a premium fintech-style dashboard.",
  },
  {
    icon: Server,
    title: "24/7 Monitoring & Support",
    text: "Benefit from continuous infrastructure oversight and a support-oriented operating model for ongoing reliability.",
  },
  {
    icon: Lock,
    title: "Secure & Non-Custodial Design",
    text: "The page is positioned around a non-custodial workflow concept, where users retain direct control over their wallet access.",
  },
];

const faqs = [
  {
    q: "Why is Solana often considered ideal for MEV strategies?",
    a: "Solana’s fast throughput and relatively low transaction costs make it attractive for execution-sensitive strategies. That combination can create more frequent opportunities than slower or more expensive environments.",
  },
  {
    q: "Does this Solana page support the idea of Jito bundle execution?",
    a: "Yes. Jito bundles are a central theme in the market positioning of Solana MEV tooling because they can help with private transaction routing and reduce certain execution risks.",
  },
  {
    q: "What kinds of Solana strategies are commonly associated with MEV?",
    a: "Common examples discussed in the ecosystem include DEX arbitrage, liquidation-related strategies, and other latency-sensitive opportunities around Solana trading venues and protocols.",
  },
  {
    q: "Do I need coding experience to use a Solana MEV interface?",
    a: "Not necessarily. A well-designed product can present advanced workflows in a simpler dashboard experience, although understanding trading risk still matters.",
  },
  {
    q: "Is the workflow non-custodial?",
    a: "This page is written around a non-custodial product concept, meaning the user experience should keep wallet control with the user rather than transferring custody.",
  },
  {
    q: "Can performance vary over time?",
    a: "Yes. Any trading outcome depends on competition, market conditions, infrastructure quality, latency, fees, and risk settings. Results are never guaranteed.",
  },
];

export default function SolanaMevBotPage() {
  return (
    <main className="min-h-screen bg-[#06080F] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24">
        <div className="absolute inset-0 grid-line opacity-60" />
        <div className="section-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_#10B981]" />
                Solana Execution Layer
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
              >
                Advanced Solana MEV Bot
              </motion.h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                A premium Solana-focused landing page built around high-speed
                execution, bundle-aware routing, arbitrage workflows, and a
                modern fintech user experience.
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
                <Link href="#solana-features">
                  <Button variant="secondary" size="xl">
                    Explore Features
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-semibold text-white">Fast</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Execution-first positioning
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Jito</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Bundle-aware narrative
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">24/7</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Monitoring concept
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
                        Solana MEV Console
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="rounded-3xl border border-white/5 bg-black/40 p-5">
                      <div className="space-y-3 font-mono text-xs text-[#10B981]">
                        <div>{">"} jito bundle path initialized</div>
                        <div>{">"} raydium / orca routing monitors online</div>
                        <div>{">"} execution environment synced</div>
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
                          Built around a Solana-first execution story.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Lock className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Bundles
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Private routing concepts for cleaner execution.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <ChartCandlestick className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Analytics
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Monitoring and performance visibility in one place.
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
              Why Solana
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Why Solana is attractive for MEV workflows
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              This page emphasizes Solana speed, bundle-aware routing, and
              lower transaction costs as the main reasons the chain is attractive
              for MEV and arbitrage-focused product positioning.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {whySolana.map((item) => {
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
              This page uses a simple 3-step flow: connect wallet, configure
              strategy, then deploy and monitor.
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

      <section id="solana-features" className="py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
              Core Features
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Professional tools for Solana-focused operators
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              The platform experience highlights automated strategies, real-time
              analysis, risk management, performance dashboards, always-on
              support, and a non-custodial security model.
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
                  Solana FAQ
                </div>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Frequently Asked
                  <br />
                  Questions
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                  Get answers to common questions about Solana-focused MEV bot
                  workflows, bundle execution concepts, and onboarding.
                </p>

                <div className="mt-8 hidden lg:block">
                  <div className="rounded-[24px] border border-[#10B981]/15 bg-[#10B981]/5 p-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <BadgeHelp className="h-4 w-4 text-[#10B981]" />
                      Need help choosing a setup?
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      This page can be expanded later with plan selection, contact
                      forms, and deeper documentation blocks.
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
                Solana MEV Bot
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Launch a dedicated Solana product page with a premium fintech feel
              </h2>
             

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WalletModalPlaceholder
                  trigger={<Button size="xl">Get Started</Button>}
                />
                <Link href="/#features">
                  <Button variant="secondary" size="xl">
                    Back to Homepage
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
                {[
                  "Solana-oriented positioning",
                  "Jito bundle narrative",
                  "Modern fintech layout",
                  "Ready for multi-page expansion",
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