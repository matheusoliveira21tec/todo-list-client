import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { Badge, Button, Table } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Header from '../../components/header';
import api from '../../services/tasks';
import './index.css';
interface ITask {
    id: string,
    nome: string,
    done: boolean
}
const Tasks: React.FC = () => {
    const [task, setTask] = useState<ITask[]>([]);
    useEffect(() => {
        loadTasks()
    }, [])
    async function loadTasks() {
        const response = await api.index();
        setTask(response.data);
    }
    async function doneTask(id:string) {
        const response = await api.update(id,{done: true});
        loadTasks();
    }
    async function notDoneTask(id:string) {
        const response = await api.update(id,{done:false});
        loadTasks();
    }
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <br />
                <div className='task-header'>
                <h1>Task Page</h1>
                <Button href='/new'  size='sm' variant='dark'> New Task</Button>
                </div>
                <br/>
                <Table striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            task.map(task => (
                                <tr key={task.id}>
                                    <td>{task.nome}</td>
                                    <td>
                                        <Badge bg={task.done ? "success" : "danger"}>{task.done ? "done" : "not done"}</Badge></td>
                                    <td> 
                                        <Button size='sm' onClick={()=>doneTask(task.id)} variant='success'>Done</Button>{' '}
                                        <Button size='sm' onClick={()=>notDoneTask(task.id)}variant='danger'>Not done</Button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>

        </Fragment>);
}
export default Tasks;