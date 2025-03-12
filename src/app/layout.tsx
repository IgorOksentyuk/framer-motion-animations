import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animations",
  description: "Animations using Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
