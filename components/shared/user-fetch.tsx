"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "@/redux/reducers/userState";
import type { AppDispatch } from "@/redux/store";

export default function AuthLoader() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return null;
}
