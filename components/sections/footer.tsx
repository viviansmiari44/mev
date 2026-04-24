import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "MEV Bots",
    links: [
      { label: "Solana MEV Bot", href: "/solana-mev-bot" },
      { label: "Front Run Bot", href: "/front-run-bot" },
      { label: "Sandwich Bot", href: "/sandwich-bot" },
    ],
  },
  {
    title: "Arbitrage Bots",
    links: [
      { label: "Ethereum Arbitrage", href: "/ethereum-arbitrage" },
      { label: "Polymarket Arbitrage", href: "/polymarket-arbitrage" },
      { label: "Binance Arbitrage", href: "/binance-arbitrage" },
      { label: "Bitcoin Arbitrage", href: "/bitcoin-arbitrage" },
      { label: "DeFi Arbitrage", href: "/defi-arbitrage" },
    ],
  },
  {
    title: "Flash Loans",
    links: [
      { label: "Flash Loan Arbitrage", href: "/flash-loan-arbitrage" },
      { label: "Aave Flash Loans", href: "/aave-flash-loans" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#06080F] pt-16 pb-8">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-[#10B981]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/logo.png"
                alt="Flash Extract MEV Logo"
                fill
                className="object-contain p-1.5"
              />
            </div>

            <div>
              <div className="text-base font-semibold text-white">
                Flash Extract MEV
              </div>
              <p className="mt-1 max-w-xl text-sm text-slate-500">
                Advanced MEV & crypto arbitrage trading software built with a
                modern fintech interface, execution-focused tooling, and
                professional performance visibility.
              </p>
            </div>
          </div>

          <div className="text-sm text-slate-500 md:text-right">
            <p>© 2026 Flash Extract MEV. All rights reserved.</p>
            <p className="mt-1">
              Built for modern crypto operators, arbitrage workflows, and
              high-performance trading infrastructure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}