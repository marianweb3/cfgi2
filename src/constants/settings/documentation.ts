export const tokens = [
  "BTC",
  "BNB",
  "ETH",
  "XRP",
  "SOL",
  "ADA",
  "LUNA",
  "AVAX",
  "DOGE",
  "DOT",
  "SHIB",
  "MATIC",
  "CRO",
  "TRX",
  "XLM",
  "LINK",
  "UNI",
  "FTM",
  "ALGO",
  "MANA",
  "LTC",
  "LEO",
  "FTT",
  "NEAR",
  "BCH",
  "ETC",
  "XMR",
  "ATOM",
  "HBAR",
  "FLOW",
  "ICP",
  "APE",
  "EGLD",
  "XTZ",
  "THETA",
  "HNT",
  "FIL",
  "BSV",
  "AXS",
  "SAND",
  "ZEC",
  "EOS",
  "IOTA",
];

export const timeSpans = [
  { id: 1, text: "15 minutes time span" },
  { id: 2, text: "1 hour temporality" },
  { id: 3, text: "4 hours temporality" },
  { id: 4, text: "1 day temporality" },
];

export const queryParameters = [
  { tag: "start", text: "Your query's start date" },
  { tag: "end", text: "Your query's end date" },
  {
    tag: "values",
    text: "The max number of values from the current date. If it's set, the start and end values are overridden. The maximum is 1200 values.",
  },
  { tag: "format", text: "Date format. By default, it's Y-m-d H:i:s" },
];