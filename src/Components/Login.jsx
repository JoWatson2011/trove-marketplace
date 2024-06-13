function Login({username, setUsername, isLoggedIn, setIsLoggedIn}) {
    return (
        <form>
            <label htmlFor="username-input">Enter Username:</label>
            <input id="username-input" value={username}></input>
            <button></button>
        </form>
    )
}

export default Login