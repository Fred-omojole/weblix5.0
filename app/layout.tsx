import type { Metadata } from "next";
// import { PrismicPreview } from "@prismicio/next";
// import { repositoryName } from "@/prismicio";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "500", "600"],
});

export const metadata: Metadata = {
  title: "Weblix",
  description: "Weblix for Web Experience",
  icons: {
    icon: ["/logoss.png?v=4"],
    shortcut: ["/logoss.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        {/* <PrismicPreview repositoryName={repositoryName} /> */}
      </body>
    </html>
  );
}
