"use client";

import { ChakraProvider } from "@chakra-ui/react";

export default function ChakraWraper({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
