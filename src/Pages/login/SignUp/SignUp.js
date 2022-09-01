import { async } from '@firebase/util';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword,user,loading,error, ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate =useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading />
    }

    if (error || gError || updateError) {
        signInError = <p className='text-center text-danger'>{error?.message || gError?.message || updateError?.message}</p>
    }

    if (user || gUser) {
        console.log(gUser || user)
    }

    const onSubmit =async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name });
        console.log('ok')
        navigate('/home')

    };

    return (
        <div className='pt-5 full-Height'>
            <div className='m-5  mx-auto p-4 shadow-lg form-container'>
                <h3 className='text-center text-info mb-3'> Please Sign Up</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-1" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                            type="name" placeholder="Your Name" required />

                        {errors.name?.type === 'required' && <span className='text-danger'>{errors.name.message}</span>}
                    </Form.Group>
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
                        Sign Up
                    </Button>
                    <p className='pt-1 mb-0'><small> Already have an account?<Link to='/signIn' className='text-primary font-weight-bold text-decoration-none pe-auto'> Sign In Now !</Link></small></p>
                    {/* <p><button className='btn btn-link text-danger pe-auto ' >Reset Password?</button></p> */}
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

export default SignUp;