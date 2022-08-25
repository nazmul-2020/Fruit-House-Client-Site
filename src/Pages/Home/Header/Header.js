import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar className='py-4' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Fruit House</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#features">Manage Items</Nav.Link>
                        <Nav.Link href="#pricing">Add Item</Nav.Link>
                        <Nav.Link href="#pricing">My Items</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;