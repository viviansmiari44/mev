export default function TrustStrip() {
  const items = [
    "Private Node Routing",
    "Execution Analytics",
    "Mempool Intelligence",
    "Arbitrage Infrastructure",
    "Operator Dashboard",
    "Performance Tracking",
  ];

  const marqueeItems = [...items, ...items];

  return (
    <section className="py-6">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[28px] border border-white/5 bg-white/[0.02] px-6 py-5">
          {/* Desktop / Tablet */}
          <div className="hidden flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500 md:flex">
            {items.map((item) => (
              <span key={item} className="whitespace-nowrap tracking-wide">
                {item}
              </span>
            ))}
          </div>

          {/* Mobile Marquee */}
          <div className="relative md:hidden">
            <div className="trust-marquee flex w-max items-center gap-8 text-sm text-slate-500">
              {marqueeItems.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="whitespace-nowrap tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}