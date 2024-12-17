import { Poppins, Poetsen_One  } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '600', '700'], 
  variable: '--font-poppins', 
  display: 'swap',
});

const poetsenOne = Poetsen_One({
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-poetsen-one', 
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poetsenOne.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
