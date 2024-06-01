import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import '/public/assets/styles/external.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechXperts",
  description: "Broadly speaking, companies in the technology sector engage in the research, development, and manufacture of technologically based goods and services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
