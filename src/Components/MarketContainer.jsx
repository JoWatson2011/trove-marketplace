import { Routes, Route } from "react-router-dom";
import AllItems from "./AllItems";
import ListItem from "./ListItem"
import { useState } from "react";
import Login from "./Login"

function MarketContainer(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    return(
        <Routes>
            <Route path="/items" element ={<AllItems />}/>
            <Route path="/login" element={<Login username={username} setUsername={setUsername} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/list-item" element={<ListItem />}/>
        </Routes>
    )
}
export default MarketContainer