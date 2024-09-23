// components/Sidebar.tsx

import { BoyIcon } from "@imdeepss/icon-studio";
import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-60 bg-gray-100 h-screen p-5">
      <ul className="space-y-3">
        <li>
          <Link href="#" className="flex items-center hover:text-blue-600">
            <span>
              <BoyIcon />
            </span>{" "}
            <span className="ml-2">Users</span>
          </Link>
        </li>
        <hr></hr>
        <li>
          <Link href="#" className="flex items-center hover:text-blue-600">
            <span>
              <BoyIcon />
            </span>{" "}
            <span className="ml-2"> Add Users</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center hover:text-blue-600">
            <span>
              <BoyIcon />
            </span>{" "}
            <span className="ml-2"> Add Users</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
