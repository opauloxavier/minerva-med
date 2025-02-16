import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Minerva Medicina Personalizada",
  description: "Medicina de Precisão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <SpeedInsights />
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
