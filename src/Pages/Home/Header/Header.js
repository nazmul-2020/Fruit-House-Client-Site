import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css'


const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='' id=''>
            <Navbar fixed="top" bg="dark" className='py-' expand="lg">
                <Container>
                    <Navbar.Brand className='text-info' href="/">Fruits House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='text-info' href="/home">Home</Nav.Link>
                            <Nav.Link className='text-info' href="#fe">Manage Items</Nav.Link>
                            <Nav.Link className='text-info' href="#pricing">Add Item</Nav.Link>
                            <Nav.Link className='text-info' href="#pricing">My Items</Nav.Link>
                            <Nav.Link className='text-info' href="#pricing">Blogs</Nav.Link>
                            {user ? <Nav.Link className='text-info' href="/signUP">Sign Up</Nav.Link> : <Nav.Link className='text-info' href="/signIn">Sign In</Nav.Link>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;