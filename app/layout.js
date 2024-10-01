// import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import Bgpinggir from '../components/Bgpinggir';
import Bgeffect from "../components/Effect";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Portofolio Ivan",
  description: "created by Ivan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Bgpinggir />
        <Bgeffect />
        {children}
      </body>
    </html>
  );
}
