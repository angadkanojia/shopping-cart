"use client";

import { FormEvent, useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../(common)/components";

type FormData = {
  username: string;
  password: string;
};

const checkUser = async (formData: FormData) => {
  //const response = await fetch("api/user-details"); //response comes form routes.ts
  //const { result } = await response.json();
  // return result;

  try {
    const response = await fetch("/api/user-details");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const { result } = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch user details:", error);
    return null;
  }
};

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    //console.log(formData);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const data = await checkUser(formData);
    // console.log(data?.message);
    // const { username, password } = formData;

    // const storedUsername = "asdf";
    // const storedPassword = "1234";

    // if (username === storedUsername && password === storedPassword) {
    //   setMessage("Login successful!");
    // } else {
    //   setMessage("Invalid username or password.");
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <div className="absolute top-3 right-0 pr-3 flex items-center text-sm leading-5">
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              />
            </div>
          </div>
          {message && <p className="text-center py-4">{message}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
