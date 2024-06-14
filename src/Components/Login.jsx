import { useState } from "react";
import { getRequest } from "../utils/api";
function Login({ setUser, setIsLoggedIn }) {
  const [usernameInput, setUsernameInput] = useState("");
  function handleChange(e) {
    setUsernameInput(e.target.value);
  }
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username-input">Enter Username:</label>
      <input id="username-input" onChange={handleChange}></input>
      <button>Login</button>
    </form>
  );
}

export default Login;
