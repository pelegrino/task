import { useEffect, useState } from "react";

export const useTitle = (initialTitle = document.title) => {
    const [ title, setTitle ] = useState(initialTitle);

    useEffect(() => {
        document.title = title;
    }, [ title ]);

    const changeTitle = (newtitle) =>  {
        setTitle(newtitle);
    }

    return { changeTitle };
}