import Logo from "../shared/Logo";
import { ButtonNav } from "../shared/ButtonNav";
import { useState } from "react";
import { ArrowLeftEndOnRectangleIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";

export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="grid grid-cols-10 w-full h-screen">
      
      {/* ========== NavBar ========== */}
      <div className="col-span-2 flex flex-col overflow-hidden relative px-4.5 py-4 bg-gray-100/50 border-r border-gray-200">
        
        {/* Logo */}
        <div className="flex items-center mb-9">
          <Logo bg={"bg-blue-800"} color={"text-white"} />
          <div className="ms-2.5">
            <h1 className="font-bold text-[20px] text-blue-800">
              Methodical
            </h1>
            <p className="text-[10px] text-gray-500">
              THE CURATED WORKSPACE
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-start">
          <ButtonNav active={active} onClick={setActive}>Dashboard</ButtonNav>
          <ButtonNav active={active} onClick={setActive}>Projects</ButtonNav>
          <ButtonNav active={active} onClick={setActive}>Calendar</ButtonNav>
          <ButtonNav active={active} onClick={setActive}>Settings</ButtonNav>
        </div>

        <div className="flex cursor-pointer absolute bottom-3 w-full py-3 px-2 rounded-b-sm my-0.5 transition text-gray-600  hover:text-blue-900">
          <ArrowRightEndOnRectangleIcon className="size-6" />
          <span className="ms-2.5" >Sign Out</span>
        </div>
      </div>

      {/* Content */}
      <div className="col-span-8 bg-white"></div>
    </div>
  );
}