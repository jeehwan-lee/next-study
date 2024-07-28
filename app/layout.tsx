import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import GlobalNav from "@/ui/global-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js 레벨업",
  description: "Next.js를 활용하여 현대적인 웹 애플리케이션 구축",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white overflow-scroll bg-[url('/grid.svg')] pb-36">
        {children}
      </body>
    </html>
  );
}
