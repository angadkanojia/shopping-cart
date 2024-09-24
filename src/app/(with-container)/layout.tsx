import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header, MainConatiner } from "@/common/components";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping cart",
  description: "Shopping cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <MainConatiner>{children}</MainConatiner>
        {/* footer */}
      </body>
    </html>
  );
}
