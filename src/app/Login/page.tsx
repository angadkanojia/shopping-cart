"use client"
// src/app/login/page.tsx

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../(common)/components';


const Login = () => {
 
const [showPassword, setShowPassword] = useState<boolean>(false);   

const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};
 
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       
    
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form>
          
            <Input type="email" placeholder='Email' required={true} />     
          
           <div className="relative">

            
           <Input type={showPassword ?"text":"password"} placeholder='Password' required={true} />
           
            <div className="absolute top-3 right-0 pr-3  flex items-center text-sm leading-5">
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              />
            </div>
          </div> 
         
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
