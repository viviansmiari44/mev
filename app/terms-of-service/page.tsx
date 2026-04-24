"use client";

import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Scale,
  Lock,
  AlertTriangle,
  BadgeHelp,
  Gavel,
  Globe,
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
    icon: FileText,
    title: "Platform Rules",
    text: "These Terms of Service define the rules, conditions, and limitations governing access to the Flash Extract MEV website, pages, tools, and related services.",
  },
  {
    icon: ShieldCheck,
    title: "User Responsibilities",
    text: "Users are expected to use the website lawfully, responsibly, and in accordance with these terms, applicable laws, and any operational restrictions we may establish.",
  },
  {
    icon: Scale,
    title: "Legal Framework",
    text: "These terms are intended to clarify rights, responsibilities, disclaimers, and limitations of liability related to the platform experience.",
  },
];

const sections = [
  {
    title: "1. Acceptance of Terms",
    text: "By accessing or using Flash Extract MEV, you agree to be bound by these Terms of Service. If you do not agree with these terms, you should not access or use the website or related services.",
  },
  {
    title: "2. Eligibility",
    text: "You represent that you are legally capable of entering into a binding agreement and that your use of the website is not prohibited under applicable law or regulation in your jurisdiction.",
  },
  {
    title: "3. Informational and Platform Purpose",
    text: "Flash Extract MEV may provide website content, product descriptions, interface experiences, informational materials, and software-related workflows. Nothing on the website should be interpreted as legal, financial, tax, investment, compliance, or professional advice.",
  },
  {
    title: "4. No Guarantee of Results",
    text: "Trading, arbitrage, and bot-related activity involves substantial risk. We do not guarantee profitability, performance, returns, market access, execution quality, or freedom from loss. Any examples, illustrations, or descriptions are for general informational purposes only.",
  },
  {
    title: "5. User Conduct",
    text: "You agree not to misuse the website, interfere with system integrity, attempt unauthorized access, introduce malicious code, infringe third-party rights, engage in unlawful activity, or use the platform in a way that could harm Flash Extract MEV, its users, or affiliated services.",
  },
  {
    title: "6. Wallets, Blockchain Activity, and Third-Party Services",
    text: "Some parts of the website may reference wallets, blockchain networks, protocols, exchanges, DeFi services, or third-party applications. We do not control third-party services and are not responsible for third-party actions, outages, fees, policies, smart contracts, or blockchain outcomes.",
  },
  {
    title: "7. Non-Custodial Positioning",
    text: "Where the website refers to wallet-based or non-custodial workflows, users remain responsible for wallet security, private keys, seed phrases, access credentials, transaction approvals, and all activity initiated through their wallets.",
  },
  {
    title: "8. Intellectual Property",
    text: "All website content, designs, branding, visuals, interface elements, text, graphics, logos, and other materials made available through Flash Extract MEV are owned by or licensed to us unless otherwise stated. You may not copy, reproduce, distribute, republish, modify, or exploit such content without permission.",
  },
  {
    title: "9. Account, Access, and Service Changes",
    text: "We may modify, suspend, limit, or discontinue any part of the website or related services at any time, with or without notice. We may also refuse or restrict access where reasonably necessary for security, operational, legal, or compliance reasons.",
  },
  {
    title: "10. Disclaimers",
    text: "The website and related services are provided on an 'as is' and 'as available' basis without warranties of any kind, whether express, implied, or statutory, including warranties of availability, merchantability, fitness for a particular purpose, non-infringement, or uninterrupted operation.",
  },
  {
    title: "11. Limitation of Liability",
    text: "To the fullest extent permitted by law, Flash Extract MEV and its affiliates, operators, contributors, contractors, and service providers shall not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including lost profits, lost opportunities, data loss, trading losses, or business interruption arising from or related to use of the website or services.",
  },
  {
    title: "12. Indemnification",
    text: "You agree to defend, indemnify, and hold harmless Flash Extract MEV and its affiliates, operators, contributors, contractors, and service providers from and against claims, liabilities, damages, losses, costs, and expenses arising out of your use of the website, violation of these terms, or infringement of any rights of another party.",
  },
  {
    title: "13. Compliance With Laws",
    text: "You are solely responsible for ensuring that your use of the website, software-related workflows, wallets, protocols, trading tools, and third-party services complies with all laws, regulations, and restrictions applicable to you in your jurisdiction.",
  },
  {
    title: "14. Termination",
    text: "We may suspend or terminate your access to the website or services at any time where reasonably necessary for security, abuse prevention, legal compliance, risk management, or violation of these terms.",
  },
  {
    title: "15. Governing Law and Disputes",
    text: "These terms shall be governed by the applicable laws designated by Flash Extract MEV, subject to any mandatory local legal requirements. Dispute resolution procedures, venue, and jurisdiction may be specified or updated in a final production legal version of these terms.",
  },
  {
    title: "16. Changes to These Terms",
    text: "We may revise these Terms of Service at any time. Continued use of the website after updated terms become effective may constitute acceptance of the revised terms, subject to applicable law.",
  },
];

const faqs = [
  {
    q: "Do these Terms guarantee trading performance?",
    a: "No. These Terms make clear that no profitability, performance, execution quality, or financial result is guaranteed.",
  },
  {
    q: "Are users responsible for their wallets?",
    a: "Yes. Where the platform uses non-custodial or wallet-based workflows, users remain responsible for their wallets, approvals, credentials, and transaction decisions.",
  },
  {
    q: "Can Flash Extract MEV change or suspend services?",
    a: "Yes. The Terms allow platform changes, restrictions, suspension, or discontinuation for operational, legal, compliance, or security reasons.",
  },
  {
    q: "Should these terms be legally reviewed before launch?",
    a: "Yes. This page is a strong website-ready starting point, but it should still be reviewed by a qualified legal professional before production use.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#06080F] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24">
        <div className="absolute inset-0 grid-line opacity-60" />
        <div className="section-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_#10B981]" />
                Terms of Service
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
              >
                Terms of Service for Flash Extract MEV
              </motion.h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                These Terms of Service govern access to and use of the Flash
                Extract MEV website, product pages, wallet-related workflows,
                software experiences, and related services.
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
                <Link href="/privacy-policy">
                  <Button variant="secondary" size="xl">
                    View Privacy Policy
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-semibold text-white">Rules</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Platform use conditions
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Risk</div>
                  <div className="mt-1 text-sm text-slate-500">
                    No guaranteed outcomes
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Control</div>
                  <div className="mt-1 text-sm text-slate-500">
                    User wallet responsibility
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
                        Terms Overview
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="rounded-3xl border border-white/5 bg-black/40 p-5">
                      <div className="space-y-3 font-mono text-xs text-[#10B981]">
                        <div>{">"} platform use conditions</div>
                        <div>{">"} non-custodial responsibility</div>
                        <div>{">"} limitation of liability</div>
                        <div className="text-slate-500">
                          {">"} legal framework active...
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Gavel className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Rules
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Website use conditions.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <AlertTriangle className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Risk
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          No outcome guarantees.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Globe className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Access
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Legal and jurisdiction context.
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
              Key Principles
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              The legal framework behind platform access
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              These terms are designed to define access, responsibilities,
              disclaimers, and protections related to a trading-software and
              wallet-connected website environment.
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
                Terms
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Terms of Service
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                Below is a standard terms framework for a bot trading and
                crypto software website.
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
                        <FileText className="h-4 w-4" />
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
                **Important:** This Terms of Service page is a general
                website-ready foundation and should be reviewed by a qualified
                legal professional before production use for any live trading,
                software, financial, or bot-related service.
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
                  Terms FAQ
                </div>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Frequently Asked
                  <br />
                  Questions
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                  Quick answers to common questions related to the platform’s
                  terms, limitations, and user responsibilities.
                </p>

                <div className="mt-8 hidden lg:block">
                  <div className="rounded-[24px] border border-[#10B981]/15 bg-[#10B981]/5 p-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <BadgeHelp className="h-4 w-4 text-[#10B981]" />
                      Need legal review?
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      These terms should be customized and reviewed before
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
                Terms of Service
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                A terms framework for a modern trading software website
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                This Terms of Service page is structured to match the same
                premium product system as the rest of the Flash Extract MEV
                website.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/privacy-policy">
                  <Button size="xl">View Privacy Policy</Button>
                </Link>
                <Link href="/disclaimer">
                  <Button variant="secondary" size="xl">
                    View Disclaimer
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