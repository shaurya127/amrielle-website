import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amrielle | Upscale Personal Branding Agency",
  description: "We create brands that stand out from the first look. Dedicated personal branding for founders, CEOs, and executives.",
  openGraph: {
    title: "Amrielle | Personal Branding Agency",
    description: "We create brands that stand out from the first look. Dedicated personal branding for founders, CEOs, and executives.",
    url: "https://amrielle-website.vercel.app", // Replace with actual custom domain later
    siteName: "Amrielle",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amrielle Personal Branding Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrielle | Personal Branding Agency",
    description: "We create brands that stand out from the first look.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
