import React, { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Redirect } from 'react-router-dom';
import Spinner from './Spinner';
import Alert from './Alert';
import Moment from 'react-moment';
import { useTasks } from "../hooks/useTasks"
import { AuthContext } from '../hooks/useAuth';

const TaskListTable = () => {
    const auth = useContext(AuthContext);
    const tasks = useTasks();

    useEffect(() => {
        if (auth.credentials.username !== null) {
            tasks.list();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ auth.credentials ]);

    const onDeleteHandler = (taskToDelete) => {
        if(window.confirm("Deseja mesmo excluir esta tarefa?")) {
            tasks.remove(taskToDelete);
        }    
    }

    useEffect(() => {
        if (tasks.taskRemoved !== null) {
            toast.success(`Tarefa ${tasks.taskRemoved.id} excluída!`, 
            { position: toast.POSITION.BOTTOM_LEFT});
            tasks.clearTaskRemoved();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks.taskRemoved]);
   

    if (!auth.isAuthenticated()) {
        return <Redirect to="/login" />
    }

        return (
            <>
            <h1>Lista de Tarefas</h1>
            { tasks.error && <Alert message={tasks.error} /> }
            { tasks.processing ? <Spinner /> : 
                <table className="table table-striped">
                    <thead className="thead-dark" >
                        <tr>
                            <th scope='col'>Status</th>
                            <th scope='col'>Descrição</th>
                            <th scope='col'>Data</th>
                            <th scope='col'>Ações</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        { tasks.taskList.length === 0 ? <tr><td colSpan="4">Sem tarefas no momento!</td></tr> : 
                            (
                                tasks.taskList.map(task => 
                                <tr key={task.id}>
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            checked={task.done}
                                            onChange={() => false }  />
                                    </td>
                                    <td>{ task.done ? <s>{task.description}</s> : task.description }</td>
                                    <td>{ 
                                        task.done ? 
                                        <s><Moment format='DD/MM/YYYY'>{ task.whenToDo }</Moment></s> : 
                                        <Moment format='DD/MM/YYYY'>{ task.whenToDo }</Moment> 
                                        }
                                        </td>
                                    <td>
                                        <input 
                                            type='button' 
                                            className='btn btn-primary' 
                                            value="Editar"
                                            onClick={() => false }
                                            />
                                        &nbsp;
                                        
                                        <input 
                                            type='button' 
                                            className='btn btn-danger' 
                                            value="Excluir" 
                                            onClick={() => onDeleteHandler(task) }
                                            />
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            }
            <ToastContainer autoClose={1500} />
        </>
    );

}

export default TaskListTable;