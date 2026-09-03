import React from 'react';
import { useForm } from "react-hook-form";
import imgUploadIcon from '../../../assets/image-upload-icon.png';
import useAuth from './../../../Hooks/useAuth';
import { Link } from 'react-router';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { registerUser } = useAuth();

    const handleRegister = (data) => {
        console.log(data);

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold my-2'>
                    Create an Account
                </h2>

                <p className='py-2'>
                    Register with ZapShift
                </p>

                <img
                    className='my-2'
                    src={imgUploadIcon}
                    alt="Upload profile"
                />
            </div>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">

                    <form onSubmit={handleSubmit(handleRegister)}>
                        <fieldset className="fieldset">

                            {/* Name */}
                            <label className="label">Name</label>

                            <input
                                type="text"
                                {...register('name', {
                                    required: true
                                })}
                                className="input"
                                placeholder="Your name"
                            />

                            {errors.name?.type === 'required' && (
                                <p className='text-red-500'>
                                    Name is required
                                </p>
                            )}


                            {/* Email */}
                            <label className="label">Email</label>

                            <input
                                type="email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                })}
                                className="input"
                                placeholder="Email"
                            />

                            {errors.email?.type === 'required' && (
                                <p className='text-red-500'>
                                    Email is required
                                </p>
                            )}

                            {errors.email?.type === 'pattern' && (
                                <p className='text-red-500'>
                                    Enter a valid email address
                                </p>
                            )}


                            {/* Password */}
                            <label className="label">
                                Password
                            </label>

                            <input
                                type="password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6
                                })}
                                className="input"
                                placeholder="Password"
                            />

                            {errors.password?.type === 'required' && (
                                <p className='text-red-500'>
                                    Password is required
                                </p>
                            )}

                            {errors.password?.type === 'minLength' && (
                                <p className='text-red-500'>
                                    Password must be at least 6 characters
                                </p>
                            )}

                            <button
                                type="submit"
                                className="btn btn-neutral mt-4"
                            >
                                Register
                            </button>
                            <p>Already Have an Account ? Please <Link to={'/login'}><span className='black font-bold'>Login</span></Link></p>
                        </fieldset>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;