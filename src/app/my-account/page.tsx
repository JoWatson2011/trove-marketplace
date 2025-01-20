"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import MyAccount from "../../Components/ListItem";
import { getToken } from "../actions";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getToken().then((token) => {
      setIsLoggedIn(!!token);
    });
  }, []);

  if (isLoggedIn) {
    return <MyAccount />;
  } else {
    redirect("/login");
  }
}
