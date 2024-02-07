import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "جان و تن",
  description: "کلینیک روانشناسی جان و تن",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl">
      <body className={inter.className}>
        {/*<Header />*/}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
