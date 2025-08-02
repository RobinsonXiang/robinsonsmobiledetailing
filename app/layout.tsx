import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robinson's Mobile Detailing - Professional Car Detailing Services",
  description: "Professional mobile car detailing services in the Bay Area. Interior, exterior, and full detail packages. Call (408) 333-2639 to book your appointment today!",
  icons: {
    icon: [
      { url: '/robinsons_mobile_detailing_logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/robinsons_mobile_detailing_logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/robinsons_mobile_detailing_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/robinsons_mobile_detailing_logo.png" />
        <link rel="apple-touch-icon" href="/robinsons_mobile_detailing_logo.png" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
