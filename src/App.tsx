import { useState } from "react";
function Hamza(){
    const [counter,setcounter]=useState(0)
    return(
        <>
            <button className="px-7 py-2 bg-red-600 m-1 rounded shadow-sm" onClick={()=>setcounter(counter+1)}>{counter}</button>
            {/* <h1>Why are you gay</h1> */}
        </>

    );
}
export default Hamza;