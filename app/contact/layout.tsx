import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next Contact Us page",
  description: "Created by GIPOSKI",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className={`dark:bg-slate-800 ${inter.className}`}>
        {children}
      </main>
  );
}
