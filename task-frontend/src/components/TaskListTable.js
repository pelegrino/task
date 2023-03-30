import React, { Component } from 'react';
import TaskService from '../api/TaskService';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

class TaskListTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    componentDidMount() {
        this.listTasks();
    }

    listTasks() {
        this.setState({ tasks: TaskService.list() });
    }

    onDeleteHandler(id) {
        if(window.confirm("Deseja mesmo excluir esta tarefa?")) {
            TaskService.delete(id);
            this.listTasks();
            toast.success("Tarefa excluída!", { position: toast.POSITION.BOTTOM_LEFT });
        }    
    }
    
    render() {
        return (
            <>
            <table className="table table-striped">
                <TableHeader />
                <TableBody 
                    tasks={this.state.tasks}
                    onDelete={this.onDeleteHandler}
                />
            </table>

            <ToastContainer autoClose={1500} />
            </>
        );
    }

}

const TableHeader = () => {
    return (
        <thead className="thead-dark" >
            <tr>
                <th scope='col'>Status</th>
                <th scope='col'>Descrição</th>
                <th scope='col'>Data</th>
                <th scope='col'>Ações</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    return (
        <tbody>
            {props.tasks.map(task => 
                <tr key={task.id}>
                    <td><input type="checkbox" checked={task.done} /></td>
                    <td>{task.description}</td>
                    <td>{task.whenToDo}</td>
                    <td>
                        <input type='button' className='btn btn-primary' value="Editar" />
                        &nbsp;<input 
                            type='button' 
                            className='btn btn-danger' 
                            value="Excluir" 
                            onClick={() => props.onDelete(task.id)}
                            />
                    </td>
                </tr>
            )}
        </tbody>
    )
}

export default TaskListTable;