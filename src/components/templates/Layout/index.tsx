"use client";

import { useEffect, useState } from "react";
import Separator from "@/components/atoms/Separator";
import Box from "@/components/layout/Box";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <>
        <Header />
        <main>{children}</main>
        <Separator />
        <Box padding={3}>
          <Footer />
        </Box>
      </>
    )
  );
};

export default Layout;
