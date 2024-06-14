import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mx-auto max-w-[1440px] pt-10">
      <div className="">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}></Navbar>
      </div>
      <main className="main-bg mx-4 overflow-x-hidden rounded-3xl">
      <Header />
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
