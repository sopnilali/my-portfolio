
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import AOSInitializer from "@/components/shared/AOSInitializer";


const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Welcome to My Porifolio!",
};



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={roboto.className}>
          {/* AOS Animation */}
          <AOSInitializer />
          <div className="min-h-screen">{children}</div>
          {/* <Footer /> */}
        </body>
      </html>
    </Providers>
  );
}
