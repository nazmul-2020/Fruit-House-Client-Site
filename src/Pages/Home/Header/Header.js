import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" className='py-4' >
                <Container>
                    <Navbar.Brand className='text-white' href="/">Fruits House</Navbar.Brand>
                    <Nav className="ms-auto  ">
                        <Nav.Link className='text-white' href="/home">Home</Nav.Link>
                        <Nav.Link className='text-white'  href="#features">Manage Items</Nav.Link>
                        <Nav.Link className='text-white' href="#pricing">Add Item</Nav.Link>
                        <Nav.Link className='text-white' href="#pricing">My Items</Nav.Link>
                        <Nav.Link className='text-white' href="#pricing">Blogs</Nav.Link>
                        <Nav.Link className='text-white' href="#pricing">Blogs</Nav.Link>
                        <Nav.Link className='text-white' href="#pricing">Blogs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;