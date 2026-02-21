"use client";

import { store } from "@/redux/store";
import { ChildProps } from "@/types";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";

export function CookieProvider({ children }: ChildProps) {
  return (
    <CookiesProvider>
      <Provider store={store}>{children}</Provider>
    </CookiesProvider>
  );
}
