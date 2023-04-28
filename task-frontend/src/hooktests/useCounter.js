import { useState } from "react"

export const useCounter = () => {
    const [value, setCounter] = useState(0);

    const increment = () => setCounter(value+1);

    return {value, increment};
}