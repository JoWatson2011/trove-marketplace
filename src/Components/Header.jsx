"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useDisplaySize } from "../custom-hooks/useDisplaySize";
import { getToken, setUser, setToken } from "../app/actions";

function Header() {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    getToken().then((user) => {
      setUserId(user);
    });
  }, []);
  const displaySize = useDisplaySize();
  // ${displaySize < 800 ? "sticky" : "mr-[50px]"}
  return (
    <header>
      <p className="text-slate-500 text-sm ">
        This website was built by Jo Watson as a portfolio project.{" "}
        <a
          href="https://github.com/JoWatson2011/trove-marketplace"
          className="underline hover:text-black"
        >
          Source code here
          <GitHubIcon className="mx-1" />
        </a>
      </p>
      <div className=" px-5">
        <nav className="flex justify-end text-[0.75rem] gap-x-5 text-slate-700 italic">
          <p>Create Account</p>
          {userId ? (
            <button
              data-cy="logout-button"
              onClick={() => {
                setUserId(undefined);
                setUser("");
                setToken("");
              }}
              className="italic"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" data-cy="login-nav">
              Login
            </Link>
          )}
          {userId ? <Link href="/my-account">My Account</Link> : null}
        </nav>
        <Link href="/">
          <h1 className="text-[70px] italic font-bold text-right hover:not-italic active:text-lime-700">
            trove
          </h1>
        </Link>
        <nav className="flex justify-end space-x-5 my-3">
          <Link href="/items">
            <button className="font-bold italic hover:text-lime-700 hover:bg-slate-50 focus:not-italic  border border-gray-600 rounded-full p-2">
              BUY
            </button>
          </Link>
          <Link href="/list-item" data-cy="sell-nav">
            <button className="font-bold italic  hover:text-lime-700 hover:bg-slate-50 border border-gray-600 rounded-full p-2">
              SELL
            </button>
          </Link>
          <div className="border border-gray-600 hover:bg-slate-50 hover:text-lime-700 rounded-full px-2 py-1">
            <ShoppingBasketIcon />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
