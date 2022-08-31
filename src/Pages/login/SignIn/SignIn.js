import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SignIn.css';
import { useForm } from 'react-hook-form';


const SignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    if (user) {
        console.log(user)
    }

    return (
        <div className='pt-5 full-Height'>
            <div className='m-5  mx-auto p-4 shadow-lg form-container'>
                <h3 className='text-center text-info mb-3'> Please Log In</h3>

                <Form className=' '>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a'
                            }
                        })}
                            type="email" placeholder="Your email" required />
                        <span></span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password" placeholder="Password" required />
                        {errors.email?.type === 'required' &&<span className='text-danger'>{errors.email.message}</span>}

                        {errors.email?.type === 'pattern' &&<span className='text-danger'>{errors.email.message}</span>}
                        
                    </Form.Group>
                    <Button className='w-75 mx-auto d-block' variant="info" type="submit">
                        Log In
                    </Button>
                    <p className='pt-2 mb-0'>Don’t have an account?<Link to='/signup' className='text-primary font-weight-bold text-decoration-none pe-auto'> Sign Up Now !</Link></p>
                    <p><button className='btn btn-link text-danger pe-auto ' >Reset Password?</button></p>

                </Form>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName", { required: true })} />
                    {errors.firstName?.type === 'required' && "First name is required"}

                    <input {...register("lastName", { required: true })} />
                    {errors.lastName && <p>Last name is required</p>}

                    <input {...register("mail", { required: "Email Address is required" })} />
                    <p>{errors.mail?.message}</p>

                    <input type="submit" />
                </form>



                <div className='d-flex align-items-center pt-0 mt-0'>
                    <div style={{ height: '2px' }} className='w-100 bg-info'></div>
                    <p className=' px-2 mb-2'>OR</p>
                    <div style={{ height: '2px' }} className='w-100 bg-info'></div>
                </div>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-whit w-75 text-wite mx-auto d-block my- bg-info'>
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SignIn;
