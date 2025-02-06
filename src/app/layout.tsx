import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HR Dashboard - Recruitment Management",
  description: "Comprehensive HR recruitment management interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-[#F8F9FA]`}>{children}</body>
    </html>
  );
}
