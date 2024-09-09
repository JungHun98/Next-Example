"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/themes";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
