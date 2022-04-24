
import React from "react";

const Greet = (props) => {

    return (
        <div>
            <h1> Hello {props.name} AKA {props.name} AKA {props.hname}</h1>

            {props.children}
            {/* {geto.children} */}
            {/* <p>Am here</p> */}
        </div>
    )
}
export default Greet;

