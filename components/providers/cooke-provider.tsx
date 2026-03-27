"use client";

import { store } from "@/redux/store";
import { ChildProps } from "@/types";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import AuthLoader from "../shared/user-fetch";

export function CookieProvider({ children }: ChildProps) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <AuthLoader />
        {children}
      </Provider>
    </CookiesProvider>
  );
}
