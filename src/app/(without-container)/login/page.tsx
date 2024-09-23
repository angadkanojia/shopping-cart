"use client";

import { Input } from "@/common/components";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  username: string;
  password: string;
};

const checkUser = async (formData: FormData) => {
  try {
    const response = await fetch("/api/user-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
    // return data;
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
    //setLoading(true);
    const data = await checkUser(formData);
    //setLoading(false);
    //console.log(data);
    // const { username, password } = formData;

    // const storedUsername = "asdf";
    // const storedPassword = "1234";

    // if (username === storedUsername && password === storedPassword) {
    //   setMessage("Login successful!");
    // } else {
    //   setMessage("Invalid username or password.");
    // }

    if (data && data.message === "Login successful!") {
      sessionStorage.setItem("token", data.token);
      setMessage(data.message); // Set message based on the API response
      window.location.href = "/dashboard";
    } else {
      setMessage(data?.message || "Login Failed..."); // Default error message
    }
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
