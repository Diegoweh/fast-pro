import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SupernavBar from "@/components/layout/SupernavBar";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeaderSlider from "@/components/layout/HeaderSlide";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fast Pro Services | Quick and Professional Solutions",
  description: "FASTPRO es líder en soluciones de embalaje industrial con FIBC y bolsas a granel de alta calidad. Descubre nuestras opciones personalizadas para almacenamiento y transporte seguro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SupernavBar/>
        <Navbar/>
        
        {/* El contenido crece y empuja el footer al fondo */}
        <main className="flex-1">
          {children}
        </main>
        {/* Tawk.to Live Chat Script */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/67d1e3da8ebbe7190b12cc58/1im5u4322';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        /> */}
        
        <Footer />
      </body>
    </html>
  );
}
