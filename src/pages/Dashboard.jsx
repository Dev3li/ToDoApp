import Logo from "../shared/Logo";
import { ButtonNav } from "../shared/ButtonNav";
import { useState } from "react";
import {
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/16/solid";
import {
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Button from "../shared/Button";
import { Link, Outlet, } from "react-router-dom";

export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");
  
  return (
    <div className="grid grid-cols-10 w-full h-screen">
      {/* ========== NavBar ========== */}
      <nav className="col-span-2 flex flex-col overflow-hidden relative px-4.5 py-4 bg-gray-100/50 border-r border-gray-200">
        {/* Logo */}
        <div className="flex items-center mb-9">
          <Logo bg={"bg-blue-800"} color={"text-white"} />
          <div className="ms-2.5">
            <h1 className="font-bold text-[20px] text-blue-800">Methodical</h1>
            <p className="text-[10px] text-gray-500">THE CURATED WORKSPACE</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-start">
          <ButtonNav active={active} onClick={setActive}>
            Dashboard
          </ButtonNav>
          <ButtonNav active={active} onClick={setActive}>
            Projects
          </ButtonNav>
          <ButtonNav active={active} onClick={setActive}>
            Calendar
          </ButtonNav>
          <ButtonNav active={active} onClick={setActive}>
            Settings
          </ButtonNav>
        </div>

        <div className="flex cursor-pointer absolute bottom-3 w-full py-3 px-2 rounded-b-sm my-0.5 transition text-gray-600  hover:text-blue-900">
          <ArrowRightEndOnRectangleIcon className="size-5" />
          <span className="ms-2 text-[14px]">Sign Out</span>
        </div>
      </nav>

      {/* Content */}
      <div className="col-span-8 bg-white">
        <header className="flex items-center justify-between text-gray-600 p-2.5 border-b border-b-gray-200   ">
          <div className="flex items-center relative ms-5 bg-gray-100 rounded-2xl">
            <MagnifyingGlassIcon className="size-5 absolute ms-2" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-86 h-10 px-4 ms-5 pb-3.5 mt-1 pt-2.5 text-gray-700 placeholder:text-[#C2C7D1] focus:outline-none focus:border-none "
            />
          </div>
          <div className="flex gap-3 items-center me-10 ">
            <Link to='newtask'>
              <div>
                <Button w={"w-25"} className="">
                  Add Task
                </Button>
              </div>
            </Link>
            <div>
              <BellIcon className="size-6 cursor-pointer" />
            </div>
            <div>
              <UserCircleIcon className="size-6 cursor-pointer" />
            </div>
          </div>
        </header>
        {/* Page */}
        <Outlet />
      </div>
    </div>
  );
}
