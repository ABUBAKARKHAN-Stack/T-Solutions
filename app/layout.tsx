import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { APP_NAME, BASE_URL, BRAND_DESCRIPTION, TAGLINE } from "@/constants/app.constants";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${APP_NAME} | ${TAGLINE}`,
    template: `%s | ${TAGLINE}`,
  },
  description: BRAND_DESCRIPTION,
  icons: {
    icon: [
      { url: "/assets/brand/favicons/favicon.ico", type: "image/png" },
      { url: "/assets/brand/favicons/favicon.svg", type: "image/svg+xml" },
      {
        url: "/assets/brand/favicons/favicon-32X32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/brand/favicons/favicon-16X16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/brand/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "Scalable Software Development Agency",
    "Custom Software Development",
    "Web Application Development",
    "Web Application Development Agency",
    "Enterprise Software Solutions",
    "Scalable Web Applications",
    "Business Software Development",
    "Digital Transformation Services",
    "Full-Stack Development Agency",
    "Enterprise Software Development",
    "Software Solutions for Growing Businesses"
  ],
  authors: [{ name: APP_NAME, url: BASE_URL }],
  creator: APP_NAME,
  publisher: APP_NAME,
  robots: "index, follow",
  category: "technology",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: `${APP_NAME} | ${TAGLINE}`,
    siteName: APP_NAME,
    description: BRAND_DESCRIPTION,
    url: BASE_URL,
    images: { url: "opengraph-image" },
    type: "website"
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
