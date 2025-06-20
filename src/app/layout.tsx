import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
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
  title: "William Westerkamp - Software Engineer & AI/ML Specialist",
  description: "Portfolio of William Westerkamp, Software Engineer at Booz Allen Hamilton specializing in AI/ML, cloud development, and full-stack applications. AWS Certified Cloud Practitioner with experience in Python, React, and cloud technologies.",
  keywords: [
    "William Westerkamp",
    "Software Engineer",
    "AI/ML Engineer",
    "Cloud Developer",
    "AWS",
    "Python",
    "React",
    "Next.js",
    "Machine Learning",
    "Booz Allen Hamilton",
    "OneTier",
    "James Madison University"
  ],
  authors: [{ name: "William Westerkamp" }],
  creator: "William Westerkamp",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamwesterkamp.com",
    title: "William Westerkamp - Software Engineer & AI/ML Specialist",
    description: "Portfolio of William Westerkamp, Software Engineer specializing in AI/ML and cloud development.",
    siteName: "William Westerkamp Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Westerkamp - Software Engineer & AI/ML Specialist",
    description: "Portfolio of William Westerkamp, Software Engineer specializing in AI/ML and cloud development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}