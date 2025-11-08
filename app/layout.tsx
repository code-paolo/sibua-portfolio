import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AosProvider } from "@/components/providers/aos-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PortfolioChatbot } from "@/components/ui/portfolio-chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paolo G. Sibua | Full Stack Web Developer",
  description:
    "Portfolio of Paolo G. Sibua, a full stack web developer specializing in React, Next.js, and modern web technologies. Building innovative web applications that deliver results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AosProvider>
            <LenisProvider>
                  <Header />
                  {children}
                  <Footer />
                  <ScrollToTop />
                  <PortfolioChatbot />
                </LenisProvider>
          </AosProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
