import React from 'react';
import imgUploadIcon from '../../../assets/image-upload-icon.png'
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
const Login = () => {
    const {signInUser} = useAuth()
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const {register,
    handleSubmit,
formState: { errors },
} = useForm()
    const handleLogin = (data) =>{
        signInUser(data.email,data.password)
        .then(result => {
            console.log(result.user)
            navigate(location.state?.from?.pathname || '/');
        })
        .catch(error =>{
            console.log(error)  
        })
    }
    return (
        <div>
            <div>
                            <h2 className='text-2xl font-bold my-2'>
                                Welcome Back !
                            </h2>
            
                            <p className='py-2'>
                                Login with ZapShift
                            </p>
            
                            <img
                                className='my-2'
                                src={imgUploadIcon}
                                alt="Upload profile"
                            />
                        </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form action="" onSubmit={handleSubmit(handleLogin)}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email', {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                })} className="input" placeholder="Email" /> {
                                    errors.email?.type==='required' && (<p className='text-red-500'>
                                    Password is required
                                </p>)
                                }
                                {
                                    errors.email?.type==='pattern' && (<p className='text-red-500'>
                                    Enter a valid email address
                                </p>)
                                }
          <label className="label">Password</label>
          <input type="password" {...register('password',{
                                    required: true,
                                    minLength: 6
                                })}  className="input" placeholder="Password" />
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
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>Don't Have an Account?  Please <Link state={location.state} to={'/register'} className='text-blue-400 font-bold'>Register</Link></p>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </fieldset> 
        </form>
      
      </div>
    </div>
        </div>
    );
};

export default Login;