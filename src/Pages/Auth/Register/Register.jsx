import React from "react";
import { useForm } from "react-hook-form";
import imgUploadIcon from "../../../assets/image-upload-icon.png";
import useAuth from "./../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate()
  const { registerUser,updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleRegister = (data) => {
    // console.log(data);
    // Collect photo from data
    const profileURL = data.photo[0]
    registerUser(data.email, data.password, data.photo[0])
      .then(() => {
        // console.log(result.user);
        // store the photo in from data
        const formData = new FormData();
        formData.append('image', profileURL);
        // imgbb API
        const imggbb_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api}`
      //  axios post
        axios.post(imggbb_API_URL,formData)
        .then(res => {
            // console.log(res.data)
            // collect profile info
            const photoURL = res.data.data.url;
            const userInfo = {
              displayName : data.name,
              email: data.email,
              photoURL: photoURL
            }
            axiosSecure.post('/users', userInfo)
            .then(res => {
              if(res.data.insertedId){
                console.log('Added In Database')
              }
            })
            const userProfile = {
                displayName : data.name,
                photoURL: photoURL
            }
            // updateprofile from firebase
            updateUserProfile(userProfile)
            .then(() =>{
                console.log('succesfully added profile')
                 navigate(location.state?.from?.pathname || '/');
            })
            .catch(error =>{
                console.log(error)
            })
        })
       
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold my-2">Create an Account</h2>

        <p className="py-2">Register with ZapShift</p>

        <img className="my-2" src={imgUploadIcon} alt="Upload profile" />
      </div>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>

              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
                className="input"
                placeholder="Your name"
              />

              {errors.name?.type === "required" && (
                <p className="text-red-500">Name is required</p>
              )}

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Upload Your Photo</legend>
                <div className="flex items-center">
                  <input
                  type="file"
                  name="photo"
                  {...register("photo", {
                    required: true,
                  })}
                  className="file-input" 
                /><img className="my-2 w-10 -ml-10" src={imgUploadIcon} alt="Upload profile" />  
                </div>
                
                <label className="label">Max size 2MB</label>
              </fieldset>
              {errors.photo?.type === "required" && (
                <p className="text-red-500">Photo is required</p>
              )}
              {/* Email */}
              <label className="label">Email</label>

              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="input"
                placeholder="Email"
              />

              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}

              {errors.email?.type === "pattern" && (
                <p className="text-red-500">Enter a valid email address</p>
              )}

              {/* Password */}
              <label className="label">Password</label>

              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                className="input"
                placeholder="Password"
              />

              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be at least 6 characters
                </p>
              )}

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p>
                Already Have an Account ? Please{" "}
                <Link state={location.state} to={"/login"}>
                  <span className="black font-bold">Login</span>
                </Link>
              </p>
              <div className="divider">OR</div>
              <SocialLogin></SocialLogin>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
