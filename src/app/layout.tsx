import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@components/Footer";
import Rating from "@components/Rating";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lab14",
  description: "Food Review Mockup UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <MantineProvider>

          {children}
          <Footer
            year="2024"
            fullName="Khunsuekthai Buashaiyo"
            studentId="660610743"
          />
        </MantineProvider>
      </body>
    </html>
  );
}
