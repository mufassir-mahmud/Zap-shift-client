import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import imgUploadIcon from '../assets/image-upload-icon.png'
import { useForm } from "react-hook-form"
const Authentication = () => {
    const {register,handleSubmit, formState: { errors },} = useForm()
    const handleRegister = (data) => {
        console.log(data)
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo/>
            <div className='flex flex-col md:flex-row my-10 items-center max-w-5xl mx-auto'>
                <div className='flex-1'>
                    <div>
                      <h2 className='text-2xl font-bold my-2'>Welcome Back !</h2>
                    <p className='py-2'>Register with ZapShift</p>
                    <img className='my-2' src={imgUploadIcon} alt="" />  
                    </div>
                    
                      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body ">
        <form action="" onSubmit={handleSubmit(handleRegister)}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email', {required: true, maxLength: 20})} className="input" placeholder="Email" /> {
            errors.email?.type==='required' && (<p role="alert" className='text-red-500'>Email is required</p>  )
          }
          <label className="label">Password</label>
          <input type="password" className="input"  {...register('password',{required: true, minLength: 6})}placeholder="Password" /> {errors.password?.type==='required' &&(<p role="alert" className='text-red-500'>Password is required</p>)} {
            errors.password?.type==="minLength" &&(<p role="alert" className='text-red-500'>Password Must be 6 Character or Longer</p>)
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>   
        </form>
        
      </div>
    </div>
                </div>
                <Outlet></Outlet>
                <div className=''>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Authentication;