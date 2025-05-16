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
        url: "https://github.com/Fred-omojole/weblix5.0/blob/48ab7878f5c2801cf2bad300f532deacaea0dbf2/assets/shots.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Webify — Entertainment Web App",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "webify — Web Solution Agency",
    description:
      "Webify empowers businesses with seamless web solutions, delivering intuitive designs, responsive layouts, and tailored experiences across every page.",
    creator: "yele — Frontend dev",
    creatorId: "omoyele60762",
    images: [
      "https://github.com/Fred-omojole/weblix5.0/blob/48ab7878f5c2801cf2bad300f532deacaea0dbf2/assets/shots.png?raw=true",
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
      <body>
        <div className={poppins.className}>{children}</div>
      </body>
    </html>
  );
}
