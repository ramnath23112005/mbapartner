import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "MBA Partner AI – Crack B-Schools with Old IIM Mentors",
  description:
    "Live Projects • Case Prep • Placements • AI Mentor. Empowering MBA aspirants with structured learning and AI-powered mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
