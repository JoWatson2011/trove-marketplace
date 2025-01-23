"use client";

import { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ActionButton from "./ActionButton.tsx";
import { logInRequest } from "../app/actions.ts";
import { AuthContext } from "../context/AuthContext.tsx";

function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [logInError, setLogInError] = useState("");

  const authorised = useContext(AuthContext);

  const router = useRouter();
  const searchParams = useSearchParams();

  function handleGuestLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLogInError("");

    logInRequest("johnd", "m38rmF$")
      .then(() => {
        authorised?.setIsAuthorised(true);
        const callbackUrl = searchParams.get("callbackUrl") || "/";
        router.push(callbackUrl);
      })
      .catch(() => {
        setLogInError("Login error. Please try again later.");
      });
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLogInError("");

    logInRequest(usernameInput, passwordInput)
      .then(() => {
        authorised?.setIsAuthorised(true);
        const callbackUrl = searchParams.get("callbackUrl") || "/";
        router.push(callbackUrl);
      })
      .catch(() => {
        setLogInError("Login error. Please try again later.");
      });
  }

  return (
    <main className="flex flex-col justify-center">
      <div className="mx-auto my-2">
        <ActionButton
          text={"Guest Log In"}
          eventHandler={handleGuestLogin}
          cyId={"guest-log-in-button"}
        />
      </div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-items-center items-center mt-[10px] border border-black rounded py-3 px-10 mx-auto w-[40%]"
      >
        <label htmlFor="username-input">Enter Username:</label>
        <input
          id="username-input"
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
          className="border border-black rounded"
          value={usernameInput}
        />
        <label htmlFor="password-input">Enter Password:</label>
        <input
          id="password-input"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
          className="border border-black rounded"
          value={passwordInput}
        />
        <ActionButton
          text={"Log In"}
          eventHandler={handleLogin}
          cyId={"log-in-button"}
        />
      </form>
      {logInError ? (
        <p
          className="text-center text-green-900 italic border border-green-700 rounded-full"
          data-cy="error-message"
        >
          {logInError}
        </p>
      ) : null}
    </main>
  );
}

export default Login;
