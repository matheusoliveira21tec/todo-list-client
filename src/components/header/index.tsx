import React from 'react';
import {Navbar,Container, Nav} from 'react-bootstrap';

const Header: React.FC = () => {
    return (<Navbar bg="dark" variant='dark' expand="lg">
        <Container>
            <Navbar.Brand >ToDo List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/tasks">Tasks</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}
export default Header;