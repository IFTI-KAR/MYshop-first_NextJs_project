"use client"; // only here, it's a client component

import { SessionProvider } from "next-auth/react";

export function SessionProviderWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
