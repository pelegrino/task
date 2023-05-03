import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { API_ENDPOINT } from "../constanst";
import { AuthContext } from "../hooks/useAuth";

export const useTasks = () => {

    const auth = useContext(AuthContext);
    const [ taskList, setTaskList ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ processing, setProcessing ] = useState(false);
    const [ taskRemoved, setTaskRemoved ] = useState(null);

    const list = async () => {

        try {
            setProcessing(true);
            setError(null);
            const response = await axios.get(`${API_ENDPOINT}/tasks?sort=whenToDo,asc`, buildAuthHeader());
            setTaskList(response.data.content);
            setProcessing(false);
        
        } catch (error) {
            handleError(error);
        }
            
    }

    const remove = async (taskToRemove) => {

        try {
            await axios.delete(`${API_ENDPOINT}/tasks/${taskToRemove.id}`, buildAuthHeader())
            setTaskList(taskList.filter(task => taskToRemove.id !== task.id));
            setTaskRemoved(taskToRemove);

        } catch (error) {
            handleError(error);
        }

    }

    const clearTaskRemoved = () => {
        setTaskRemoved(null);
    }

    const buildAuthHeader = () => {
        return {
            headers: {
                'Authorization': `Bearer ${auth.credentials.token}`
            } 
        }
    }

    const handleError = (error) => {
        console.log(error);
        const resp = error.response;

        if (resp && resp.status === 400 && resp.data) {
            setError(resp.data.error);
        } else {
            setError(error.message);
        }

        setProcessing(false);
    }

    return { taskList, error, processing, taskRemoved, list, remove, clearTaskRemoved };
}