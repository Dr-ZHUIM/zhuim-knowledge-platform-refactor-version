import type { Metadata } from "next";

import "@/assets/styles/animation.scss";
import "@/assets/styles/common.scss";
import "@/assets/styles/md.scss";
import "@/assets/styles/article.scss";
import "@/assets/styles/normalize.scss";
// import "@/assets/styles/katex.min.css";
import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-full flex-col">
          <Navbar />
          <section className="w-full">{children}</section>
        </main>
      </body>
    </html>
  );
}

