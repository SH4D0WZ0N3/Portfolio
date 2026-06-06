import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "SH4D0W — Telegram Infrastructure & Backend Systems",
  description:
    "Backend Systems Engineer and Telegram Infrastructure Specialist based in Ontario, Canada. I build production-grade Telegram platforms, automation pipelines, and distributed backend systems.",
  keywords: [
    "Telegram Bot Developer",
    "Pyrogram",
    "MTProto",
    "Backend Engineer",
    "Python",
    "MongoDB",
    "Automation Systems",
    "Ontario Canada",
  ],
  authors: [{ name: "SH4D0W" }],
  openGraph: {
    title: "SH4D0W — Telegram Infrastructure & Backend Systems",
    description:
      "Production-grade Telegram platforms, automation pipelines, and backend architecture.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "SH4D0W — Telegram Infrastructure Engineer",
    description: "Building infrastructure that operates in silence.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060608",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
