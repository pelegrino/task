import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./useAuth"

export const useNavBarItems = () => {
    const auth = useContext(AuthContext);
    const [ items, setItems ] = useState([]);

    useEffect(() => {

        const activate = (clickedItem) => {
            if (!clickedItem.active) {
                setItems(items.map(item => item.name === clickedItem.name ?
                    { ...item, active: true } : { ...item, active: false }));
            }
        }

        const items = [
            { name: "Listar Tarefas", href: "/", active: true, onClick: activate },
            { name: "Nova Tarefa", href: "/form", active: false, onClick: activate }
        ];

        if (auth.isAuthenticated()) {
            items.push({ name: "Logout", active: false, href: "#", onClick:() => auth.logout() });
        }

        setItems(items);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.credentials]);

    return { items };
}