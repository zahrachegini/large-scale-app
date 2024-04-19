import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const iranyekan = localFont({
  src: [
    {
      path: "../../public/fonts/iranyekan/IRANYekanWebThin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/IRANYekanWebLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/IRANYekanWebRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/IRANYekanWebBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/IRANYekanWebExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/IRANYekanWebBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      className={`dark ${figtree.variable} ${iranyekan.variable}`}
    >
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
