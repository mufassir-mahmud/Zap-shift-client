import React from 'react';
import error from '../../animations/error.json';
import { Lottie } from "lottie-react";
import { useNavigate } from 'react-router';
const ForbidenAccess = () => {
   const navigate = useNavigate()
    return (
         <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 shadow-2xl rounded-2xl p-8 text-center max-w-md w-full">

        <Lottie
          animationData={error}
          autoplay
          loop
          style={{ width: 160, height: 120, margin: "0 auto" }}
        />

        <h2 className="text-2xl font-bold mt-4">
          You are Forbidden to Access This Page
        </h2>

        <p className="text-gray-500 mt-2">
          Please contact the administrator if you believe this is an error.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-accent"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="btn btn-accent"
          >
            Go To Dashboard
          </button>
        </div>

      </div>
    </div>
    );
};

export default ForbidenAccess;