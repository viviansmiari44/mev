import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Independent Crypto Operator",
    image: "/testimonials/user-1.jpg",
    text: "The interface feels premium and the performance reporting is exactly the kind of visibility I want in a serious execution product.",
  },
  {
    name: "Daniel Ross",
    role: "Digital Asset Analyst",
    image: "/testimonials/user-2.jpg",
    text: "Flash Extract MEV presents itself like a real fintech system, not a generic crypto landing page. The structure looks far more credible.",
  },
  {
    name: "Marcus Vale",
    role: "Strategy Researcher",
    image: "/testimonials/user-3.jpg",
    text: "The dashboard concept, latency framing, and clean analytics layout make this feel closer to institutional tooling.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
            Testimonials
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Don&apos;t Just Take Our Word For It
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            see what our users are saying about their experience with our crypto arbitrage trading software
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.name}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:bg-white/[0.05]"
            >
              <CardContent className="flex h-full flex-col p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-[#10B981] text-[#10B981]"
                      />
                    ))}
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#10B981]/10 text-[#10B981]">
                    <Quote className="h-4 w-4" />
                  </div>
                </div>

                <p className="text-sm leading-8 text-slate-300">
                  “{item.text}”
                </p>

                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-white/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}