"use client";

import React from "react";
import "./globals.css";

import { SWRConfig } from "swr";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import { AuthContextProvider } from "@/contexts/AuthContext";
import GlobalSpinnerContextProvider from "@/contexts/GlobalSpinnerContext";
import { ShoppingCartContextProvider } from "@/contexts/ShoppingCartContext";
import StyledComponentsRegistry from "@/lib/registry";
import { ApiContext } from "@/types";
import { fetcher } from "@/utils";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>NEXT</title>
        <meta name="description" content="Next Level" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
      </head>

      <body>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            <SWRConfig
              value={{
                shouldRetryOnError: false,
                fetcher,
              }}
            >
              <GlobalSpinnerContextProvider>
                <ShoppingCartContextProvider>
                  <AuthContextProvider context={context}>
                    {children}
                  </AuthContextProvider>
                </ShoppingCartContextProvider>
              </GlobalSpinnerContextProvider>
            </SWRConfig>
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
