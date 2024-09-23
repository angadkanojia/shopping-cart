import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input = ({
  type = "text",
  placeholder,
  name,
  id,
  value,
  onChange,
  required,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      onChange={onChange}
      required={required}
      className="mb-4  w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300p-2 border border-gray-300 round-md"
    />
  );
};

export default Input;
