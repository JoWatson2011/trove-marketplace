import { useState } from "react";
import { getRequest } from "../utils/api";
function Login({ setUser, setIsLoggedIn }) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    getRequest(`/api/users/${usernameInput}`)
      .then(({ user }) => {
        setUser((currentUser) => {
          return {
            ...currentUser,
            username: user.username,
            avatar_url: user.avatar_url,
            kudos: user.kudos,
            items_in_basket: user.items_in_basket,
            items_ordered: user.items_ordered,
          };
        });
        setIsLoggedIn(true);
        setUsernameInput("");
        // Redirect when isLoggedIn===true
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-items-center items-center mt-[100px] mx-auto w-[25%]"
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
      <button>Login</button>
    </form>
  );
}

export default Login;
