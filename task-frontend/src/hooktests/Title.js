import React from "react";
import { useTitle } from "./useTitle";

const Title = () => {
    const title = useTitle("Texto qualquer")

    return (
        <div className="App">
            <form>
                <input type="text" onChange={(e) => title.changeTitle(e.target.value)} />
            </form>
        </div>
    );
}

export default Title;