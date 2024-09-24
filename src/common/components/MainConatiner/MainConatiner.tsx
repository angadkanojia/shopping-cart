import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";
type Props = {
  children: ReactNode; //may be component
};

const MainConatiner = ({ children }: Props) => {
  return <div className="">{children}</div>;
};

/* const MainConatiner = ({ children }: Props) => {
  return (
    <div className="bg-white flex">
      <Sidebar />
      <div className="">{children}</div>
    </div>
  );
}; */

export default MainConatiner;
