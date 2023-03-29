import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarItem extends Component {

    render() {
        return (
            <div>
                <Link 
                    className="nav-item nav-link active"
                    to={this.props.href} 
                    onClick={e => this.props.onClick(this.props.item)}>
                        {this.props.item.name}
                </Link>
            </div>
        );
    }
}

export default NavBarItem;