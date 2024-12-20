import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "500", "600"],
});

export const metadata: Metadata = {
  title: "Webify",
  description:
    "Webify delivers seamless web development solutions, crafting stunning websites and digital experiences to elevate your online presence and engage your audience effortlessly.",
  icons: {
    icon: ["/logoss.png?v=4"],
    shortcut: ["/logoss.png"],
  },

  generator: "Next.js",
  colorScheme: "light",
  openGraph: {
    title: "Webify — Web Solution Agency",
    description:
      "Webify empowers businesses with seamless web solutions, delivering intuitive designs, responsive layouts, and tailored experiences across every page.",
    url: "https://weblix-snowy.vercel.app/",
    siteName: "weblix-snowy.vercel.app",
    images: [
      {
        url: "https://github.com/victorcodess/flixify/assets/84178696/e7b1ffb1-498e-421e-a1b0-48092068ef0c",
        width: 1200,
        height: 630,
        alt: "Flixify — Entertainment Web App",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flixify — Entertainment Web App",
    description:
      "Explore a vast collection of movies and TV series, bookmark your favorites, and enjoy seamless navigation across genres.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://github.com/victorcodess/flixify/assets/84178696/e7b1ffb1-498e-421e-a1b0-48092068ef0c",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
