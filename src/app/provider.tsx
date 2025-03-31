"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  const client = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={client}>
        {children}
      </QueryClientProvider>
    </div>
  )
}
