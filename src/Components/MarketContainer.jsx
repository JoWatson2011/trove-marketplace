import { Routes, Route } from "react-router-dom";
import AllItems from "./AllItems";

function MarketContainer(){
    return(
        <Routes>
            <Route path="/items" element ={<AllItems />}/>
        </Routes>
    )
}
export default MarketContainer