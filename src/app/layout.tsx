import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

 
const roboto = Roboto_Flex({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CPX",
  description: "Lo mejor de crypto en un solo lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="es">
    <body className={`${roboto.variable} antialiased flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </body>
  </html>
  );
}
