import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignIn.css'

const SignIn = () => {
    return (
        <div>
            <div className='m-5   mx-auto p-4 shadow-lg form-container'>
                <h3 className='text-center text-primary'> Please Sign Up</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-75 mx-auto d-block' variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <p className='pt-2 mb-0'>Already have an account?<Link to='/login' className='text-info text-decoration-none font-weight-bold'> Please Login</Link></p>
                    {/* <SocialLogin></SocialLogin> */}
                </Form>
            </div>
        </div>
    );
};

export default SignIn;