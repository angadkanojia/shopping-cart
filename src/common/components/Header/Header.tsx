"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import headerCart from "/public/images/header_cart.svg";
import useLocalStorageState from "use-local-storage-state";

const Header = () => {
  const [cart, setCart] = useLocalStorageState<any[]>("cart");

  return (
    <header className="bg-transparent p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Menu Links on the Left */}

        <ul className="flex space-x-4">
          <li>
            <Link href="#" className="hover:text-gray-400">
              <Image className="" src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">
              Users
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">
              Content
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">
              Setup
            </Link>
          </li>
        </ul>

        {/* Setting Link on the Right */}
        <ul className="flex space-x-4">
          <li>
            {" "}
            <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
              {cart?.length}
            </span>
            <Link href="/shopping_cart" className="hover:text-gray-400">
              <Image src={headerCart} alt="add to cart image " />
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-400">
              Login/Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
