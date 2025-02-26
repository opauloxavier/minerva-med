import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
      <Head>
        <title>Minerva Medicina Personalizada</title>
        <meta
          name="description"
          content="Minerva Medicina Personalizada - Medicina de Precisão. Em breve."
        />
        <meta
          name="keywords"
          content="medicina personalizada, medicina de precisão, saúde, clínica"
        />
        <meta name="author" content="Minerva Medicina Personalizada" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <body className={`antialiased`}>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
