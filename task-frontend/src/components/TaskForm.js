import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            task: {
                id: 0,
                description: "",
                whenToDo: ""
            }
        }
        
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onsInputChangeHandler = this.onsInputChangeHandler.bind(this);
    }
    

    onSubmitHandler(event) {
        event.preventDefault();

    }


    onsInputChangeHandler(event) {
        const field = event.target.name;
        const value = event.target.value;

        this.setState(prevState => ({ taks: { ...prevState.task, [field]: value }}));
    }

    render() {
        return (
            <div>
                <h1>Cadastro da Tarefa</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className='form-group'>
                        <label  htmlFor='description'>Descrição</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            name='description' 
                            placeholder='Digite a descrição'
                            onChange={this.onsInputChangeHandler} />
                    </div>
                    <div className='form-group'>
                        <label  htmlFor='whenToDo'>Data</label>
                        <input 
                            type='date' 
                            className='form-control' 
                            name='whenToDo' 
                            placeholder='Digite a data'
                            onChange={this.onsInputChangeHandler} />
                    </div>
                    <button type='submit' className='btn btn-primary'>Cadastrar</button>
                    &nbsp;&nbsp;
                    <button type='button' className='btn btn-primary'>Cancelar</button>
                </form>
            </div>
        );
    }
}

export default TaskForm;