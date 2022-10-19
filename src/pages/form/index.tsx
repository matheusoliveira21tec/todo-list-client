import React, { Fragment } from 'react';
import { useEffect, useState, } from 'react';
import { Alert, Badge, Button, Form, Table } from 'react-bootstrap';
import Header from '../../components/header';
import api from '../../services/tasks';
import './index.css'
interface ITask {
    id: string,
    nome: string,
    done: boolean
}
const Tasks: React.FC = () => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const handleSubmit = async (evt: any) => {
        evt.preventDefault();
        try {
            await api.create({ nome: name, done: false });
            setStatus("success")
        } catch (err) {
            setStatus("error")
        }
    }

    return (
        <Fragment>
            <Header />
            <div className='container'>
                <br />
                <div className='task-header'>
                    <h1>New task</h1>
                    <Button href='/tasks' size='sm' variant='dark'> Back</Button>
                </div>
            </div>
            <div className='container'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Enter title" onChange={e => setName(e.target.value)} value={name} />

                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                    {status == "error" &&
                        <Alert variant="danger">Problema ao criar</Alert>
                    }
                    {status == "success" &&
                        <Alert variant="primary">Criado com sucesso.</Alert>
                    }
                </Form>

            </div>
        </Fragment>);
}
export default Tasks;