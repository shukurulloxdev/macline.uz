"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Iuser } from "@/types";
import { setUser } from "@/redux/reducers/userState";

interface Props {
  user: Iuser | null;
}

export default function AuthLoader({ user }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return null;
}
