"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is CryptoMEV Bot and how does it work?",
    a: "CryptoMEV Bot is an automated crypto arbitrage trading solution designed to identify market inefficiencies and execute trading strategies across supported environments with speed and precision.",
  },
  {
    q: "Is my money safe with CryptoMEV Bot?",
    a: "CryptoMEV Bot is built with a strong focus on operational security, monitored infrastructure, and controlled execution workflows. Users should always follow best practices for account, wallet, and capital management.",
  },
  {
    q: "Do I need coding experience to use the bot?",
    a: "No. The platform is designed to provide a more accessible user experience, allowing users to operate through a guided interface without needing advanced programming knowledge.",
  },
  {
    q: "What exchanges and blockchains are supported?",
    a: "Supported environments depend on the version and deployment configuration of the platform. The interface is structured to support modern multi-environment trading operations with room for scaling.",
  },
  {
    q: "How much profit can I expect to make?",
    a: "Profitability depends on market conditions, execution quality, volatility, capital size, and risk settings. Results are never fixed and can vary over time.",
  },
  {
    q: "What's the difference between Retail and Enterprise plans?",
    a: "Retail plans are generally suited for individual users, while Enterprise plans are intended for higher-scale operations, broader infrastructure needs, and more advanced support or deployment requirements.",
  },
  {
    q: "Can I test the bot before purchasing?",
    a: "Testing availability depends on the onboarding model you choose. Some users may begin through guided access, demonstrations, or staged onboarding before selecting a full plan.",
  },
  {
    q: "How do I get started after purchasing?",
    a: "After purchasing, users typically complete onboarding, configure access, review setup instructions, and begin using the platform through the provided interface and support channels.",
  },
  {
    q: "Is MEV trading legal?",
    a: "The legal status of MEV-related activity can depend on jurisdiction, exchange rules, and how the strategies are implemented. Users are responsible for ensuring compliance with applicable laws and platform terms.",
  },
  {
    q: "What kind of support do you provide?",
    a: "Support can include onboarding guidance, platform assistance, infrastructure help, and ongoing operational support depending on the selected plan.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
                FAQ
              </div>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Frequently Asked
                <br />
                Questions
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                Get answers to common questions about CryptoMEV Bot
              </p>

              <div className="mt-8 hidden lg:block">
                <div className="rounded-[24px] border border-[#10B981]/15 bg-[#10B981]/5 p-5">
                  <div className="text-sm font-medium text-white">
                    Need more help?
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Our team is available to guide you through onboarding,
                    setup, and general platform questions.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((item, index) => (
                  <AccordionItem
                    key={index}
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
  );
}