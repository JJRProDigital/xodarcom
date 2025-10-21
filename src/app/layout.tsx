import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xodarcom Sol Inf SL - Instalaciones Solares Profesionales",
  description: "Instalaciones de paneles solares residenciales y comerciales. Reduce tu factura eléctrica hasta un 95% con energía solar limpia y rentable. Evaluación gratuita.",
  keywords: "paneles solares, energía solar, instalaciones solares, ahorro eléctrico, energía renovable, España",
  authors: [{ name: "Xodarcom Sol Inf SL" }],
  openGraph: {
    title: "Xodarcom Sol Inf SL - Instalaciones Solares Profesionales",
    description: "Instalaciones de paneles solares residenciales y comerciales. Reduce tu factura eléctrica hasta un 95% con energía solar limpia y rentable.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xodarcom Sol Inf SL - Instalaciones Solares Profesionales",
    description: "Instalaciones de paneles solares residenciales y comerciales. Reduce tu factura eléctrica hasta un 95% con energía solar limpia y rentable.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
