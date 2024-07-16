//import dependencies
import "./globals.css";
import { Inter } from "next/font/google";

//import components
import Header from "@/Components/Header";
import ActiveSectionContextProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/Components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lesly's Portfolio",
  description: "Lesly is a Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-200 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
