"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  Radar,
  Layers3,
  ChartCandlestick,
  Users,
  BadgeHelp,
  Target,
  Workflow,
  Lock,
  Server,
  Eye,
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

const pillars = [
  {
    icon: Target,
    title: "Execution-Focused Vision",
    text: "Flash Extract MEV was built around the idea that modern crypto trading interfaces should feel refined, structured, and professional while still serving fast-moving execution workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Trust Through Design",
    text: "We believe credibility matters. That is why our product experience is built with clear information hierarchy, modern fintech visuals, and stronger visibility into tools and workflows.",
  },
  {
    icon: Globe,
    title: "Built For Modern Operators",
    text: "Our platform concept is designed for traders, researchers, and digital asset operators who want a cleaner environment for monitoring, execution review, and performance visibility.",
  },
];

const values = [
  {
    icon: Eye,
    title: "Clarity",
    text: "We design around visibility, clean layouts, and interfaces that make complex workflows easier to understand.",
  },
  {
    icon: Workflow,
    title: "Structure",
    text: "We believe premium products feel intentional, with every section, workflow, and interaction built for coherence.",
  },
  {
    icon: Radar,
    title: "Awareness",
    text: "Real-time visibility, monitoring, and market awareness sit at the center of the product experience we are building.",
  },
  {
    icon: Lock,
    title: "Control",
    text: "We position our workflow concepts around user control, non-custodial thinking, and stronger operational oversight.",
  },
  {
    icon: Server,
    title: "Reliability",
    text: "Our design language emphasizes stable infrastructure, consistent monitoring, and professional-grade product presentation.",
  },
  {
    icon: Layers3,
    title: "Scalability",
    text: "The website system is built to grow into a broader product ecosystem with dedicated pages, legal documents, and future expansion.",
  },
];

const faqs = [
  {
    q: "What is Flash Extract MEV?",
    a: "Flash Extract MEV is presented as a premium crypto trading software brand focused on modern fintech design, execution-oriented tooling, and professional performance visibility.",
  },
  {
    q: "What makes your platform different?",
    a: "The platform is designed to feel more structured and premium than a typical crypto landing page, with a stronger focus on clarity, design quality, and product-page consistency.",
  },
  {
    q: "Who is the platform built for?",
    a: "It is positioned for modern crypto operators, traders, researchers, and users who want a more polished environment for arbitrage and execution-related workflows.",
  },
  {
    q: "Is Flash Extract MEV a custodial platform?",
    a: "The site and product language are positioned around non-custodial workflow concepts, where user control and wallet ownership remain central.",
  },
  {
    q: "Will the site keep expanding?",
    a: "Yes. The website is being built as a scalable system with multiple product pages, legal pages, and room for future platform growth.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#06080F] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24">
        <div className="absolute inset-0 grid-line opacity-60" />
        <div className="section-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_#10B981]" />
                About Flash Extract MEV
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
              >
                Built for modern crypto operators
              </motion.h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Flash Extract MEV is built around a simple idea: crypto trading
                software should feel professional, modern, and trustworthy. We
                combine execution-focused product thinking with a premium fintech
                interface designed for visibility, structure, and scale.
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
                <Link href="/#features">
                  <Button variant="secondary" size="xl">
                    Explore Platform
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-semibold text-white">Modern</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Premium fintech design
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Focused</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Execution-first product thinking
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Scalable</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Built for long-term growth
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
                        Company Overview
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="rounded-3xl border border-white/5 bg-black/40 p-5">
                      <div className="space-y-3 font-mono text-xs text-[#10B981]">
                        <div>{">"} premium interface philosophy</div>
                        <div>{">"} execution-focused product system</div>
                        <div>{">"} scalable multi-page architecture</div>
                        <div className="text-slate-500">
                          {">"} building for long-term platform growth...
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Users className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">Users</div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Built for serious digital asset operators.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <ChartCandlestick className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">Product</div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Designed around monitoring and visibility.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <ShieldCheck className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">Trust</div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          A stronger, more credible web presence.
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
              Who We Are
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              A brand built around clarity, credibility, and execution
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              Flash Extract MEV is not positioned as a generic crypto landing
              page. It is being built as a modern product system with stronger
              structure, cleaner presentation, and a more refined experience for
              users exploring advanced crypto workflows.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((item) => {
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
              Our Values
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              The principles shaping the platform
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              Every page, section, and workflow is being built to reflect a more
              premium, modern, and reliable product identity.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#10B981]/30"
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
                  About Us FAQ
                </div>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Frequently Asked
                  <br />
                  Questions
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                  Learn more about the brand, the platform direction, and what
                  makes Flash Extract MEV different.
                </p>

                <div className="mt-8 hidden lg:block">
                  <div className="rounded-[24px] border border-[#10B981]/15 bg-[#10B981]/5 p-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <BadgeHelp className="h-4 w-4 text-[#10B981]" />
                      Want to explore the platform?
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      You can continue into the product pages, homepage sections,
                      and legal pages from here as the site expands.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((item) => (
                    <AccordionItem
                      key={item.q}
                      value={item.q}
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
                About Flash Extract MEV
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                A modern crypto brand with a premium product direction
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Flash Extract MEV is being developed as a refined web experience
                for modern operators who value visibility, structure, and a more
                credible fintech presentation.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WalletModalPlaceholder
                  trigger={<Button size="xl">Get Started</Button>}
                />
                <Link href="/#features">
                  <Button variant="secondary" size="xl">
                    View Homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}