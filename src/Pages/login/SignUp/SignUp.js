import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='pt-5'>
            <div className='m-5  mx-auto p-4 shadow-lg form-container '>
                <h3 className='text-center text-info mb-3'> Please Log In</h3>
                <Form className='  '>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <span></span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                        <span></span>
                    </Form.Group>
                    <Button className='w-50 mx-auto  d-block' variant="info" type="submit">
                        Log In
                    </Button>
                    <p className='pt-2 mb-0'>Don’t have an account?<Link to='/signup' className='text-primary font-weight-bold text-decoration-none pe-auto'> Sign Up Now !</Link></p>
                    <p><button className='btn btn-link text-danger pe-auto ' >Reset Password?</button></p>
                    <div className='d-flex align-items-center'>
                        <div style={{ height: '2px' }} className='w-100 bg-info'></div>
                        <p className=' px-2'>or</p>
                        <div style={{ height: '2px' }} className='w-100 bg-info'></div>
                    </div>
                    <button className='btn btn-whit w-75 text-wite mx-auto d-block my- bg-info'>
                        <span className='px-2'>Google Sign In</span>
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;