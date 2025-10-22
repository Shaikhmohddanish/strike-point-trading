"use client";

import dynamic from "next/dynamic";

const StockdioTicker = dynamic(() => import("@/components/stockdio/ticker"), {
  ssr: false,
});

export default function MarketsClient() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">NSE Ticker</h1>
      <StockdioTicker
        symbols="SBIN;LT;ICICIBANK;RELIANCE;HINDALCO"
        stockExchange="NSE"
        layoutType={2}
        height={420}
      />
    </main>
  );
}