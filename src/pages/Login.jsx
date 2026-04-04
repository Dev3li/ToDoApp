import { Link } from "react-router-dom";
import Button from "../shared/Button";
import Input from "../shared/Input";
import Logo from "../shared/Logo";
import toast from 'react-hot-toast';

// p-12 
export default function Login() {
  return (
    <>
      <div className="flex justify-center items-center h-screen  bg-[#F8F9FF] ">
        <div className="h-screen lg:h-fit w-111 flex justify-center  items-center flex-col bg-white shadow-xl lg:p-12   ">
          {/* Title page */}
          <div className="flex flex-col items-center mb-5">
            <Logo bg={'bg-blue-800'} color={'text-white'} />
            <h1 className="font-manrope font-extrabold text-[26px] mt-5 text-blue-800 ">
              Methodical
            </h1>
            <p className="font-inter font-regular text-[14px]  text-gray-500 ">
              The Curated Workspace
            </p>
          </div>
          {/* Form */}
          <form  className="flex flex-col justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault()
            toast('Server not work')
          }}>
            <div>
              <Input placeholder={"name@company.com"} type={"text"} label={'Email Address'}/>
            </div>
           <div className="mt-1 mb-8">
             <Input placeholder={"●●●●●●"} type={"password"} label={'Password'}  />
           </div>
            <Button>Log In</Button>
          </form>
          {/*   */}
          <p className="text-blue-800 text-[12px] cursor-pointer font-inter font-semibold mt-4 mb-8">Forgot Password?</p>
          <p className=" font-inter font-semibold text-[12px] text-gray-500">Don't have an account? <Link to={'/signup'}> <button className="text-blue-800 cursor-pointer">Sign up for free</button>  </Link> </p>
        </div>
      </div>
    </>
  );
}
