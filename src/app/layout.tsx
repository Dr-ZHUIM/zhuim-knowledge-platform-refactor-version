import "@/assets/styles/animation.scss";
import "@/assets/styles/common.scss";
import "@/assets/styles/md.scss";
import "@/assets/styles/article.scss";
import "@/assets/styles/normalize.scss";
import { Navbar } from "@/components";
import ReactQueryProvider from "@/providers/ReactQueryProviders";
import getQueryClient from "@/providers/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-full flex-col">
          <Navbar />
          <ReactQueryProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <HydrationBoundary state={dehydratedState}>
                <section className="w-full">{children}</section>
              </HydrationBoundary>
            </Suspense>
          </ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}

