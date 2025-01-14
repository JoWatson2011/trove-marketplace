"use client";

import { useState, useContext } from "react";
import { getRequest, postRequest } from "../utils/api";
import { useRouter } from "next/navigation";
import ActionButton from "../Components/ActionButton.jsx";
import { UserDispatchContext } from "../context/UserContext";

function Login() {
  const dispatch = useContext(UserDispatchContext);

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [logInError, setLogInError] = useState("");

  const router = useRouter();

  function logInRequest(username, password) {
    postRequest(`/auth/login`, {
      username: username,
      password: password,
    })
      .then(({ token }) => {
        console.log(token);
        localStorage.setItem("token", token);

        return getRequest("/users/1");
      })
      .then((user) => {
        const userDetails = {
          username: user.username,
          email: user.email,
          address: user.address,
          phone: user.phone,
        };

        dispatch({ type: "login", data: userDetails });

        setUsernameInput("");
        setPasswordInput("");
      })
      .then(() => {
        router.back();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 500) {
          setLogInError("Network error. Please try again later.");
        } else {
          setLogInError(
            "Please check username and password are entered correctly."
          );
        }
      });
  }

  function handleGuestLogin(e) {
    e.preventDefault();
    setLogInError("");

    logInRequest("johnd", "m38rmF$");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLogInError("");

    logInRequest(usernameInput, passwordInput);
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
        onSubmit={handleSubmit}
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
        <ActionButton text={"Log In"} cyId={"log-in-button"} />
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
