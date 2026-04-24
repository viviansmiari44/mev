"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Radar,
  ChartCandlestick,
  Wallet,
  Settings2,
  Activity,
  Lock,
  Server,
  Layers3,
  CheckCircle2,
  BadgeHelp,
  Scale,
  Timer,
  ScanSearch,
  BarChart3,
  BadgePercent,
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

const coreConcepts = [
  {
    icon: BadgePercent,
    title: "Binary Market Mispricing Analysis",
    text: "Polymarket arbitrage is best framed around identifying mispriced binary outcome markets, especially when probabilities or paired outcomes diverge from expected pricing relationships.",
  },
  {
    icon: Timer,
    title: "Latency-Sensitive Execution",
    text: "Recent research and reporting on Polymarket emphasize that execution timing and stale pricing windows can matter significantly for prediction-market arbitrage workflows.",
  },
  {
    icon: Scale,
    title: "Probability & Spread Validation",
    text: "A professional product page should position the strategy around validating price relationships, filtering weak opportunities, and monitoring market structure before execution.",
  },
];

const steps = [
  {
    number: "01",
    icon: Wallet,
    title: "Connect Your Wallet",
    text: "Start with a clean onboarding flow that prepares the interface for Polymarket-focused monitoring, market scanning, and execution workflows.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Configure Arbitrage Settings",
    text: "Review strategy preferences, market filters, and monitoring rules through a polished operator dashboard built for clarity and control.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Deploy & Monitor",
    text: "Launch the workflow and follow live opportunity signals, execution conditions, and performance metrics through a modern fintech-style control surface.",
  },
];

const features = [
  {
    icon: Layers3,
    title: "Polymarket Arbitrage Strategies",
    text: "Deploy structured prediction-market arbitrage workflows through a refined interface designed for visibility, organization, and professional execution control.",
  },
  {
    icon: Radar,
    title: "Real-Time Market Analysis",
    text: "Track live pricing inefficiencies, outcome discrepancies, and execution-sensitive conditions with a clear professional analytics experience.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Risk Management",
    text: "Maintain stronger oversight with structured controls, monitoring views, and decision support for risk-aware market operations.",
  },
  {
    icon: ChartCandlestick,
    title: "Performance Dashboard",
    text: "Analyze execution behavior, inspect trade outcomes, and review key metrics through a polished dashboard interface.",
  },
  {
    icon: Server,
    title: "24/7 Monitoring & Support",
    text: "Present the platform as a continuously monitored environment with support-oriented infrastructure designed for reliability.",
  },
  {
    icon: Lock,
    title: "Secure & Non-Custodial Design",
    text: "This page is positioned around a non-custodial workflow concept where the user retains direct control over wallet access and platform setup.",
  },
];

const faqs = [
  {
    q: "What is Polymarket arbitrage software?",
    a: "Polymarket arbitrage software is generally described as a tool that monitors prediction markets for pricing inefficiencies, misaligned outcome probabilities, or latency-driven opportunities and attempts to act on them through an automated or semi-automated workflow.",
  },
  {
    q: "Why is Polymarket suitable for arbitrage discussions?",
    a: "Public reporting and research around Polymarket highlight inefficiencies, stale prices, and binary market structure as reasons the platform is often discussed in the context of arbitrage and latency-sensitive strategies.",
  },
  {
    q: "Do I need coding experience to use the platform?",
    a: "Not necessarily. A strong dashboard experience can make advanced workflows easier to operate through a guided interface, even when the underlying strategy is sophisticated.",
  },
  {
    q: "Is the workflow non-custodial?",
    a: "Yes. This page is written around a non-custodial product concept, meaning the user experience should keep wallet control with the user rather than transferring custody.",
  },
  {
    q: "Can profitability vary over time?",
    a: "Yes. Any trading-related result depends on market conditions, execution timing, opportunity quality, competition, fees, infrastructure, and risk settings.",
  },
  {
    q: "Can this page be expanded later with pricing or onboarding?",
    a: "Yes. It follows the same product-page architecture as the rest of your site, so pricing, onboarding, and plan sections can be added later without redesigning the whole page.",
  },
];

export default function PolymarketArbitragePage() {
  return (
    <main className="min-h-screen bg-[#06080F] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24">
        <div className="absolute inset-0 grid-line opacity-60" />
        <div className="section-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_#10B981]" />
                Prediction Market Arbitrage Layer
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
              >
                Advanced Polymarket Arbitrage Software
              </motion.h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                A premium fintech landing page for Polymarket arbitrage workflows,
                designed around binary market mispricing analysis, latency-sensitive
                execution, and professional monitoring visibility.
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
                <Link href="#polymarket-features">
                  <Button variant="secondary" size="xl">
                    Explore Features
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-semibold text-white">Live</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Binary market monitoring
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Fast</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Latency-aware workflow
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">24/7</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Continuous analytics
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
                        Polymarket Arbitrage Console
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="rounded-3xl border border-white/5 bg-black/40 p-5">
                      <div className="space-y-3 font-mono text-xs text-[#10B981]">
                        <div>{">"} binary market scanner initialized</div>
                        <div>{">"} stale-pricing monitor online</div>
                        <div>{">"} opportunity filter synced</div>
                        <div className="text-slate-500">
                          {">"} awaiting wallet authorization...
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <ScanSearch className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Scanning
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Built around binary market monitoring.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Timer className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Latency
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Structured around timing-sensitive execution.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <BarChart3 className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Analysis
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Dashboard visibility in one place.
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
              Core Strategy
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              How the Polymarket arbitrage narrative is framed
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              Polymarket arbitrage is commonly framed around mispriced odds,
              binary market inefficiencies, and latency-sensitive execution
              opportunities across prediction markets.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {coreConcepts.map((item) => {
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
              This page keeps the same connect, configure, and deploy structure
              used across your product-page system for consistency.
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

      <section id="polymarket-features" className="py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
              Core Features
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Professional tools for Polymarket arbitrage operators
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              The platform experience combines advanced strategies, real-time
              market analysis, risk management, dashboards, continuous support,
              and non-custodial security positioning.
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
                  Polymarket Arbitrage FAQ
                </div>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Frequently Asked
                  <br />
                  Questions
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                  Get answers to common questions about Polymarket arbitrage
                  software, setup, timing, and product positioning.
                </p>

                <div className="mt-8 hidden lg:block">
                  <div className="rounded-[24px] border border-[#10B981]/15 bg-[#10B981]/5 p-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <BadgeHelp className="h-4 w-4 text-[#10B981]" />
                      Need help choosing a setup?
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      This page follows the same expandable product-page system,
                      so pricing, onboarding, and plan sections can be added later.
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
                Polymarket Arbitrage
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Keep building every product page in one consistent system
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                This page matches the same structure and visual language as the
                earlier product pages so the whole site stays cohesive.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WalletModalPlaceholder
                  trigger={<Button size="xl">Get Started</Button>}
                />
                <Link href="/ethereum-arbitrage">
                  <Button variant="secondary" size="xl">
                    View Ethereum Page
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