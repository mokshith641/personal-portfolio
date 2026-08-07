import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mokshith H C | AI & Machine Learning Engineer",
  description: "AI & Machine Learning Engineer undergraduate with hands-on experience building full-stack applications using React, FastAPI, Django, Supabase, and LangChain. Developer of CareerCompass, Smart Notification System, and Research Paper Assistant.",
  keywords: ["AI Engineer", "Machine Learning", "Full Stack Developer", "Next.js", "React", "FastAPI", "Django", "Python", "Mokshith H C"],
  authors: [{ name: "Mokshith H C" }],
  creator: "Mokshith H C",
  openGraph: {
    title: "Mokshith H C | AI & Machine Learning Engineer",
    description: "AI & Machine Learning Engineer undergraduate specializing in full-stack applications, applied AI models, and scalable APIs.",
    url: "https://mokshith.dev",
    siteName: "Mokshith H C Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mokshith H C | AI & Machine Learning Engineer",
    description: "AI & Machine Learning Engineer undergraduate specializing in full-stack applications, applied AI models, and scalable APIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-primary-bg text-text-primary font-sans antialiased overflow-x-hidden">
        {/* Subtle global noise overlay to add Vercel-like paper texture */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
