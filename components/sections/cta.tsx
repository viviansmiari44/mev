"use client";

import { Button } from "@/components/ui/button";
import WalletModalPlaceholder from "@/components/wallet-modal-placeholder";

export default function Cta() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="rounded-[36px] border border-[#10B981]/20 bg-[linear-gradient(180deg,rgba(16,185,129,0.14),rgba(16,185,129,0.03))] px-6 py-10 sm:px-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
              Launch Flash Extract MEV
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Turn your current index page into a real fintech brand presence
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Modern layout, premium UI, strong sections, and a ready modal container for your approved wallet experience.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WalletModalPlaceholder trigger={<Button size="xl">Get Started</Button>} />

              <a
                href="https://t.me/crypto_arbitrage_trading_bots1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="xl">
                  Join Telegram
                </Button>
              </a>

              <a href="#performance">
                <Button variant="secondary" size="xl">
                  View Performance
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}