import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-200 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Menu Links on the Left */}
        <ul className="flex space-x-4">
          <li>
            <Link href="#" className="hover:text-gray-400">
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
            <Link href="#" className="hover:text-gray-400">
              Setting
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
