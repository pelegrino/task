import React from "react"
import { useCounter } from "./useCounter";

const Counter = () => {

    const counter = useCounter();

    return (
        <div className="App">
            <center>
                <h1>{counter.value}</h1>
                <input type="button" value="Incrementar" onClick={() => counter.increment()} />
            </center>
        </div>
    );
}

export default Counter;