"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", performance: 22 },
  { month: "Feb", performance: 31 },
  { month: "Mar", performance: 46 },
  { month: "Apr", performance: 43 },
  { month: "May", performance: 57 },
  { month: "Jun", performance: 68 },
  { month: "Jul", performance: 74 },
];

export default function Performance() {
  return (
    <section id="performance" className="py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10B981]">
              Performance
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Clear visibility into execution and growth
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              Present performance in a clean institutional-style dashboard with detailed analytics, system health visibility, and professional reporting blocks.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent>
                  <div className="text-sm text-slate-500">Execution Uptime</div>
                  <div className="mt-2 text-3xl font-semibold text-white">99.94%</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="text-sm text-slate-500">Response Latency</div>
                  <div className="mt-2 text-3xl font-semibold text-white">14ms</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="overflow-hidden rounded-[32px]">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Operator Performance View</div>
                  <div className="mt-1 text-lg font-semibold text-white">7-Month Trend</div>
                </div>
                <div className="rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-3 py-1 text-xs font-medium text-[#10B981]">
                  Live
                </div>
              </div>

              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="perfFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "#64748B", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "#64748B", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#0D111C",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                        color: "#fff",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="performance"
                      stroke="#10B981"
                      strokeWidth={2.5}
                      fill="url(#perfFill)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}