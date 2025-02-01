import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { extractRouterConfig } from "uploadthing/server";

import "@uploadthing/react/styles.css";
import React from "react";
import "~/styles/globals.css";
import TopNav from "./_components/TopNav";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata: Metadata = {
  title: "Gallery by Eik",
  description: "Gallery app by EIK.DEV",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${GeistSans.variable} flex flex-col gap-4`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <TopNav />
          {children}
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
