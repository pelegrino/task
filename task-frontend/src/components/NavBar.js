import React, { Component } from 'react';
import { APP_NAME } from '../constanst';
import NavBarItem from './NavBarItem';


class NavBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [
                {name: "Listar Tarefas", href: "/"},
                {name: "Nova Tarefa", href: "/form"},
            ]
        }
    }

    onClickHandler(item) {
        alert(item.name);
    }

    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">{APP_NAME}</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                            {this.state.items.map(
                                i => <NavBarItem
                                    item={i}
                                    onClick={this.onClickHandler} />)}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;