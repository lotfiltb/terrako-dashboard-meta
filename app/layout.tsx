import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terrako Campaign Dashboard",
  description: "Marketing performance insights & ROI analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
