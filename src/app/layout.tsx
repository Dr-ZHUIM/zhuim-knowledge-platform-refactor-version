import type { Metadata } from "next";
import Head from "next/head";

import "@/assets/styles/animation.scss";
import "@/assets/styles/common.scss";
import "@/assets/styles/md.scss";
import "@/assets/styles/article.scss";
import "@/assets/styles/normalize.scss";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Dr.Zhuim's Knowledge Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <main className="flex min-h-full flex-col">
          <Navbar />
          <section className="max-w-[375px] w-full mx-auto py-[40px] px-[20px] md:max-w-3xl lg:max-w-5xl">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}

