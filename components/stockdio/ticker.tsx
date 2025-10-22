"use client";

type Props = {
  symbols?: string;
  stockExchange?: string;
  palette?: string;
  layoutType?: number;
  height?: number | string;
  className?: string;
};

export default function StockdioTicker({
  symbols = "SBIN;LT;ICICIBANK;RELIANCE;HINDALCO",
  stockExchange = "NSE",
  palette = "Financial-Dark",
  layoutType = 1,
  height = 45,
  className = "",
}: Props) {
  const base =
    "https://api.stockdio.com/visualization/financial/charts/v1/Ticker";

  const src = `${base}?app-key=${encodeURIComponent(
    process.env.NEXT_PUBLIC_STOCKDIO_KEY!
  )}&stockExchange=${encodeURIComponent(
    stockExchange
  )}&symbols=${encodeURIComponent(
    symbols
  )}&palette=${encodeURIComponent(
    palette
  )}&layoutType=${encodeURIComponent(String(layoutType))}`;

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <iframe
        id="stockdio_ticker"
        src={src}
        width="100%"
        height="100%"
        frameBorder={0}
        scrolling="no"
        // sandbox limits what the iframe can do while still allowing it to run scripts
        sandbox="allow-scripts allow-same-origin"
        referrerPolicy="no-referrer-when-downgrade"
        title="Stockdio Ticker"
        style={{ display: "block", maxWidth: "100%", marginBottom: '-4px' }}
      />
    </div>
  );
}