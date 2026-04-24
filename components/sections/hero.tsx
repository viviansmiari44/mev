"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Activity, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WalletModalPlaceholder from "@/components/wallet-modal-placeholder";

const metrics = [
  { label: "Latency", value: "14ms" },
  { label: "Live Monitoring", value: "24/7" },
  { label: "Chains", value: "Multi-Chain" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 grid-line opacity-60" />
      <div className="section-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]"
            >
              <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_#10B981]" />
              High-Frequency Execution Layer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
            >
              Advanced MEV & Crypto Arbitrage Trading Software
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              Built for speed, precision, and professional crypto execution. Flash Extract MEV delivers a modern trading interface, deep market visibility, and infrastructure-first performance for advanced arbitrage operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <WalletModalPlaceholder
                trigger={
                  <Button size="xl" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />

              <a href="#performance">
                <Button variant="secondary" size="xl">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  View Performance
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {metrics.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <Card className="hero-glow overflow-hidden rounded-[32px] bg-[#0B1019]">
              <CardContent className="p-0">
                <div className="border-b border-white/5 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                    <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      FlashExtract Terminal
                    </span>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <div className="rounded-3xl border border-white/5 bg-black/40 p-5">
                    <div className="space-y-3 font-mono text-xs text-[#10B981]">
                      <div>{">"} Mempool scanner initialized</div>
                      <div>{">"} Routing through private execution nodes</div>
                      <div>{">"} Arbitrage pathing synced</div>
                      <div className="text-slate-500">{">"} awaiting operator authorization...</div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                      <ShieldCheck className="mb-3 h-5 w-5 text-[#10B981]" />
                      <div className="text-sm font-medium text-white">Execution Safety</div>
                      <div className="mt-1 text-xs leading-6 text-slate-500">
                        Infrastructure-led environment for controlled strategy operations.
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                      <Activity className="mb-3 h-5 w-5 text-[#10B981]" />
                      <div className="text-sm font-medium text-white">Real-Time Signals</div>
                      <div className="mt-1 text-xs leading-6 text-slate-500">
                        Live market visibility with mempool and path monitoring.
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-4">
                      <Cpu className="mb-3 h-5 w-5 text-[#10B981]" />
                      <div className="text-sm font-medium text-white">Low-Latency Stack</div>
                      <div className="mt-1 text-xs leading-6 text-slate-500">
                        Built for speed-focused execution and analytics workflows.
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
  );
}