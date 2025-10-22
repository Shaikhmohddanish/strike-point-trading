"use client";

import dynamic from "next/dynamic";

const StockdioTicker = dynamic(() => import("@/components/stockdio/ticker"), {
  ssr: false,
});

export default function HeaderTicker() {
  return <StockdioTicker height={35} />;
}