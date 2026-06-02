import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Kusumbha Kalyan Nidhi Limited (KKNL) | Trustworthy Savings, FDs & Gold Loans",
  description: "Kusumbha Kalyan Nidhi Limited (KKNL) offers secure savings accounts, fixed deposits (FD), recurring deposits (RD), daily pigmi collection, and instant gold loans with maximum transparency, attractive interest rates, and minimal documentation.",
  keywords: [
    "KKNL",
    "Kusumbha Kalyan Nidhi Limited",
    "Nidhi Company",
    "Gold Loan Sangli",
    "Fixed Deposit Nidhi",
    "Recurring Deposit Nidhi",
    "Pigmi Collection Service",
    "Secure Investments Sangli",
    "Cooperative Banking",
    "EMI Calculator Loans"
  ],
  authors: [{ name: "KKNL Team" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
