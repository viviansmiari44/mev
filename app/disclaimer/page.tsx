"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ShieldAlert,
  BadgeHelp,
  Scale,
  FileWarning,
  LineChart,
  Wallet,
  ArrowRight,
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

const highlights = [
  {
    icon: AlertTriangle,
    title: "No Financial Advice",
    text: "All content on Flash Extract MEV is provided for general informational and educational purposes only and should not be treated as financial, investment, legal, tax, or professional advice.",
  },
  {
    icon: LineChart,
    title: "Trading Risk",
    text: "Crypto trading, arbitrage, bot usage, DeFi activity, and blockchain interaction involve substantial risk, including the risk of partial or total loss.",
  },
  {
    icon: ShieldAlert,
    title: "No Guarantees",
    text: "We do not guarantee profitability, execution quality, returns, outcomes, uptime, availability, or suitability for any particular user, strategy, or market condition.",
  },
];

const sections = [
  {
    title: "1. General Information Only",
    text: "The Flash Extract MEV website, product pages, interface designs, software descriptions, strategy references, and related content are made available for general informational purposes only. Nothing on this website constitutes financial advice, investment advice, legal advice, tax advice, compliance advice, or any other professional recommendation.",
  },
  {
    title: "2. No Investment Recommendation",
    text: "References to arbitrage, MEV, flash loans, trading tools, automation, wallets, exchanges, protocols, or software workflows do not constitute a recommendation, solicitation, endorsement, offer, or invitation to buy, sell, deploy, or use any financial product, token, protocol, trading system, or investment strategy.",
  },
  {
    title: "3. High-Risk Activity",
    text: "Trading digital assets, using automated systems, interacting with blockchains, and participating in DeFi or arbitrage-related activity carries substantial risk. Risks may include volatility, slippage, failed transactions, gas costs, liquidity shortages, smart contract failure, exploits, technical issues, regulatory developments, competition, execution failure, and permanent loss of funds.",
  },
  {
    title: "4. No Guarantee of Profitability or Performance",
    text: "Flash Extract MEV does not guarantee profits, returns, successful execution, uptime, speed, accuracy, strategy performance, or any financial result. Any description of strategy concepts, workflows, infrastructure, or product benefits is not a promise of future outcome.",
  },
  {
    title: "5. User Responsibility",
    text: "Users are solely responsible for their own decisions, research, risk evaluation, wallet security, private keys, seed phrases, credentials, approvals, transactions, compliance obligations, and any activity conducted through wallets, protocols, or third-party services.",
  },
  {
    title: "6. Non-Custodial and Third-Party Risk",
    text: "Where the website references non-custodial workflows, users remain fully responsible for wallet control and transaction approvals. We do not control third-party wallets, exchanges, protocols, bridges, nodes, smart contracts, or blockchain networks, and we are not responsible for losses, failures, outages, fees, or third-party misconduct.",
  },
  {
    title: "7. Accuracy and Completeness",
    text: "While we may aim to provide accurate and current information, we do not warrant that any website content is complete, accurate, reliable, current, or error-free. Content may change at any time without notice.",
  },
  {
    title: "8. Regulatory and Jurisdictional Differences",
    text: "The legality, treatment, or availability of digital asset services, automated trading tools, and DeFi-related activity may vary by jurisdiction. Users are solely responsible for understanding and complying with all laws, regulations, restrictions, and obligations applicable to them.",
  },
  {
    title: "9. No Fiduciary Relationship",
    text: "Use of the website does not create any fiduciary, advisory, brokerage, custodial, partnership, agency, or client relationship between you and Flash Extract MEV.",
  },
  {
    title: "10. Limitation of Reliance",
    text: "You should not rely solely on this website when making trading, investment, legal, or compliance decisions. You should obtain independent professional advice where appropriate before engaging in any activity involving digital assets, trading software, or financial risk.",
  },
  {
    title: "11. Forward-Looking and Promotional Statements",
    text: "Some content on the website may contain forward-looking, illustrative, conceptual, or promotional statements regarding software capabilities, user experience, workflow design, or product direction. Such statements are not guarantees and may not reflect actual results or future platform development.",
  },
  {
    title: "12. Disclaimer Updates",
    text: "We may update this Disclaimer from time to time. Continued use of the website after changes become effective may constitute acceptance of the revised disclaimer, subject to applicable law.",
  },
];

const faqs = [
  {
    q: "Does Flash Extract MEV provide financial advice?",
    a: "No. The website and its content are provided for informational and educational purposes only and should not be treated as financial or investment advice.",
  },
  {
    q: "Does the site guarantee trading profits?",
    a: "No. The Disclaimer makes clear that no profitability, performance, return, or trading outcome is guaranteed.",
  },
  {
    q: "Who is responsible for wallet and trading decisions?",
    a: "Users are solely responsible for their wallets, credentials, approvals, transactions, research, and all decisions related to trading or blockchain activity.",
  },
  {
    q: "Should this Disclaimer be legally reviewed before launch?",
    a: "Yes. This page is a strong website-ready foundation, but it should still be reviewed by a qualified legal professional before production use.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#06080F] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24">
        <div className="absolute inset-0 grid-line opacity-60" />
        <div className="section-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_#10B981]" />
                Disclaimer
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
              >
                Disclaimer for Flash Extract MEV
              </motion.h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                This Disclaimer explains the limits of responsibility, the
                informational nature of the website, and the risks associated
                with crypto trading, arbitrage workflows, bot software, wallets,
                and blockchain-based activity.
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
                <Link href="/terms-of-service">
                  <Button variant="secondary" size="xl">
                    View Terms of Service
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-semibold text-white">Risk</div>
                  <div className="mt-1 text-sm text-slate-500">
                    High-risk activity disclosure
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">No Advice</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Informational use only
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Responsibility</div>
                  <div className="mt-1 text-sm text-slate-500">
                    User decision accountability
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
                        Disclaimer Overview
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="rounded-3xl border border-white/5 bg-black/40 p-5">
                      <div className="space-y-3 font-mono text-xs text-[#10B981]">
                        <div>{">"} no financial advice</div>
                        <div>{">"} no guarantee of results</div>
                        <div>{">"} user assumes trading risk</div>
                        <div className="text-slate-500">
                          {">"} legal risk disclosure active...
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <AlertTriangle className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Risk
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Trading losses are possible.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Scale className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Limits
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Reliance limitations disclosed.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Wallet className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Wallets
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Users remain responsible.
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
              Core Principles
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              The limits of responsibility and reliance
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              This Disclaimer is designed to make clear that the website is
              informational, that trading activity is risky, and that users
              remain responsible for their own decisions and outcomes.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => {
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
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
                Disclaimer Terms
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Disclaimer Terms
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                Below is a standard disclaimer framework for a crypto trading,
                arbitrage, bot, and wallet-connected website environment.
              </p>
            </div>

            <div className="mt-14 space-y-5">
              {sections.map((section) => (
                <Card
                  key={section.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03]"
                >
                  <CardContent className="p-7">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#10B981]/10 text-[#10B981]">
                        <FileWarning className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {section.title}
                        </h3>
                        <p className="mt-3 text-sm leading-8 text-slate-400">
                          {section.text}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-[#10B981]/15 bg-[#10B981]/5 p-6">
              <p className="text-sm leading-7 text-slate-300">
                **Important:** This Disclaimer page is a strong general website
                foundation, but it should be reviewed by a qualified legal
                professional before production use for any live trading,
                financial, software, or bot-related platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
                  Disclaimer FAQ
                </div>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Frequently Asked
                  <br />
                  Questions
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                  Quick answers to common questions related to risk,
                  responsibility, and limitations of reliance.
                </p>

                <div className="mt-8 hidden lg:block">
                  <div className="rounded-[24px] border border-[#10B981]/15 bg-[#10B981]/5 p-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <BadgeHelp className="h-4 w-4 text-[#10B981]" />
                      Need legal review?
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      This disclaimer should be customized and reviewed before
                      production use, especially for live financial services.
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
                Disclaimer
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                A risk and reliance framework for a modern trading website
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                This Disclaimer page is structured to match the same premium
                product system as the rest of the Flash Extract MEV website.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/privacy-policy">
                  <Button size="xl">View Privacy Policy</Button>
                </Link>
                <Link href="/terms-of-service">
                  <Button variant="secondary" size="xl">
                    View Terms of Service
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