"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Database,
  Eye,
  FileText,
  Globe,
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

const highlights = [
  {
    icon: Lock,
    title: "User Data Protection",
    text: "We are committed to protecting personal information, wallet-related interactions, and platform usage data through structured privacy practices and operational safeguards.",
  },
  {
    icon: Database,
    title: "Limited Data Collection",
    text: "We only collect information that is reasonably necessary to provide, maintain, secure, and improve the Flash Extract MEV website and related services.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "This Privacy Policy explains what information may be collected, how it may be used, how it may be stored, and what rights users may have regarding that information.",
  },
];

const sections = [
  {
    title: "1. Information We Collect",
    text: "We may collect personal information such as name, email address, wallet address, communication details, device information, browser type, IP address, usage analytics, and other information voluntarily submitted through forms, wallet interactions, or support requests.",
  },
  {
    title: "2. How We Use Information",
    text: "We may use collected information to operate the website, provide requested services, improve platform functionality, respond to support inquiries, maintain security, prevent fraud or abuse, analyze usage trends, and communicate important platform or policy updates.",
  },
  {
    title: "3. Wallet and Blockchain Data",
    text: "Because Flash Extract MEV may involve wallet-related workflows, public blockchain activity and wallet addresses may be visible on public networks. We do not control public blockchain records, and users understand that on-chain activity may be publicly accessible by design.",
  },
  {
    title: "4. Cookies and Analytics",
    text: "We may use cookies, pixels, analytics tools, and similar technologies to improve site performance, understand user behavior, remember preferences, and support website functionality. Users may be able to control some cookie settings through their browser.",
  },
  {
    title: "5. Data Sharing",
    text: "We do not sell personal information. We may share information with service providers, analytics vendors, hosting providers, compliance partners, professional advisers, or legal authorities where reasonably necessary to operate the business, comply with legal obligations, or protect rights and security.",
  },
  {
    title: "6. Data Retention",
    text: "We retain information only for as long as reasonably necessary for operational, legal, security, compliance, and business purposes. Retention periods may vary depending on the nature of the information and applicable obligations.",
  },
  {
    title: "7. Security Measures",
    text: "We use reasonable administrative, technical, and organizational measures to protect information. However, no internet-based service, storage system, or transmission method can be guaranteed to be completely secure.",
  },
  {
    title: "8. International Use",
    text: "If users access the website from outside the country where our operations are based, their information may be transferred to, processed in, or stored in other jurisdictions where privacy laws may differ.",
  },
  {
    title: '9. Children\'s Privacy',
    text: "Flash Extract MEV is not intended for children. We do not knowingly collect personal information from minors without appropriate authorization where required by law.",
  },
  {
    title: "10. User Rights",
    text: "Depending on applicable law, users may have rights to access, correct, delete, restrict, object to, or request portability of certain personal information. Users may also have the right to withdraw consent where processing is based on consent.",
  },
  {
    title: "11. Third-Party Services and Links",
    text: "The website may contain links to third-party platforms, wallets, protocols, exchanges, analytics tools, or other external services. We are not responsible for the privacy practices, terms, or content of third-party services.",
  },
  {
    title: "12. Policy Updates",
    text: "We may update this Privacy Policy from time to time. Continued use of the website after changes become effective may constitute acceptance of the revised policy, subject to applicable law.",
  },
];

const faqs = [
  {
    q: "Does Flash Extract MEV sell my personal data?",
    a: "No. Our Privacy Policy states that we do not sell personal information. We may share limited data with service providers or authorities only where reasonably necessary for operations, compliance, security, or legal purposes.",
  },
  {
    q: "Do you store wallet activity?",
    a: "We may process wallet-related interactions needed to support the platform experience, but public blockchain activity is inherently visible on-chain and not privately controlled by us.",
  },
  {
    q: "Can this Privacy Policy change later?",
    a: "Yes. We may update the Privacy Policy from time to time to reflect platform changes, legal requirements, operational needs, or security practices.",
  },
  {
    q: "How do users contact the platform about privacy concerns?",
    a: "You can direct privacy-related questions, requests, or concerns through the support or contact channels that Flash Extract MEV makes available on the website.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#06080F] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24">
        <div className="absolute inset-0 grid-line opacity-60" />
        <div className="section-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_#10B981]" />
                Privacy Policy
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
              >
                Privacy Policy for Flash Extract MEV
              </motion.h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                This Privacy Policy explains how Flash Extract MEV may collect,
                use, store, protect, and disclose information in connection with
                the website, product pages, wallet-related workflows, and
                trading-software platform experience.
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
                <Link href="/about-us">
                  <Button variant="secondary" size="xl">
                    About Us
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-semibold text-white">Privacy</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Data handling transparency
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Security</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Reasonable protection measures
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Control</div>
                  <div className="mt-1 text-sm text-slate-500">
                    User rights and requests
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
                        Policy Overview
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="rounded-3xl border border-white/5 bg-black/40 p-5">
                      <div className="space-y-3 font-mono text-xs text-[#10B981]">
                        <div>{">"} data collection transparency</div>
                        <div>{">"} wallet-related privacy disclosure</div>
                        <div>{">"} security and retention principles</div>
                        <div className="text-slate-500">
                          {">"} privacy governance active...
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Lock className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Security
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Reasonable protective measures.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Database className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Storage
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          Limited retention principles.
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                        <Globe className="mb-3 h-5 w-5 text-[#10B981]" />
                        <div className="text-sm font-medium text-white">
                          Access
                        </div>
                        <div className="mt-1 text-xs leading-6 text-slate-500">
                          International use disclosure.
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
              How we approach privacy and information handling
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              Our privacy approach is built around protection, proportionality,
              and transparency so users can better understand how information
              may be handled across the Flash Extract MEV platform experience.
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
                Privacy Terms
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Privacy Policy Terms
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                Below is a standard privacy framework designed for a trading
                software website and bot-related platform environment.
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
                **Important:** This page is a general website privacy policy and
                should be reviewed by a qualified legal professional before
                being relied upon as final legal documentation for a live
                trading, bot, or financial platform.
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
                  Privacy FAQ
                </div>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Frequently Asked
                  <br />
                  Questions
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                  Quick answers to common privacy questions related to the
                  Flash Extract MEV website and trading-software environment.
                </p>

                <div className="mt-8 hidden lg:block">
                  <div className="rounded-[24px] border border-[#10B981]/15 bg-[#10B981]/5 p-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <BadgeHelp className="h-4 w-4 text-[#10B981]" />
                      Need legal review?
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      This policy should be reviewed and tailored before
                      production use, especially for live financial or
                      high-risk services.
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
                Privacy Policy
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                A privacy framework for a modern trading software website
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                This Privacy Policy page is structured to match the same premium
                product system as the rest of the Flash Extract MEV website.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/terms-of-service">
                  <Button size="xl">View Terms of Service</Button>
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