"use client";
import ListItem from "../../Components/ListItem";
import { redirect } from "next/navigation";
import { getToken } from "../actions";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getToken().then((token) => {
      setIsLoggedIn(!!token);
    });
  }, []);

  if (isLoggedIn) {
    return <ListItem />;
  } else {
    redirect("/login");
  }
}
