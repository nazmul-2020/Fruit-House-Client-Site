import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SignIn.css';
import { useForm } from 'react-hook-form';
import Loading from '../../Loading/Loading';


const SignIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    let signInError;

    if (loading || gLoading) {
        return <Loading />
    }

    if (error || gError) {
        signInError = <p className='text-center text-danger'>{error?.message || gError?.message}</p>
    }

    if (user || gUser) {
        console.log(user, gUser)
    }

    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };


    return (
        <div className='pt-5 full-Height'>
            <div className='m-5  mx-auto p-4 shadow-lg form-container'>
                <h3 className='text-center text-info mb-3'> Please Sign In</h3>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })}
                            type="email" placeholder="Your email" required />

                        {errors.email?.type === 'required' && <span className='text-danger'>{errors.email.message}</span>}

                        {errors.email?.type === 'pattern' && <span className='text-danger'>{errors.email.message}</span>}
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control {...register("password", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            minLength: {
                                value: 8,
                                message: 'Most be 8 characters or longer'
                            }
                        })}
                            type="password" placeholder="Password" required />
                        <Form.Label>
                            {errors.password?.type === 'required' && <span className='text-danger'>{errors.password.message}</span>}

                            {errors.password?.type === 'minLength' && <span className='text-danger'>{errors.password.message}</span>}
                        </Form.Label>

                    </Form.Group>
                    {signInError}
                    <Button className='w-75 mx-auto d-block' variant="info" type="submit">
                        Log In
                    </Button>
                    <p className='pt-2 mb-0'>Don’t have an account?<Link to='/signup' className='text-primary font-weight-bold text-decoration-none pe-auto'> Sign Up Now !</Link></p>
                    <p><button className='btn btn-link text-danger pe-auto ' >Reset Password?</button></p>
                </Form>
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
