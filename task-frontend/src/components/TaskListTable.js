import React, { Component } from 'react';

class TaskListTable extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <td>Status</td>
                <td>Descrição</td>
                <td>Data</td>
                <td>Ações</td>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}

export default TaskListTable;