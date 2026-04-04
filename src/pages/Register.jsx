import { Link } from "react-router-dom";
import Button from "../shared/Button";
import Input from "../shared/Input";
import Logo from "../shared/Logo";

export default function Register() {
  return (
    <>
      {/* Bg Lg */}
      <div className="">
        <div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 h-screen ">
          {/* Inf */}
          <div className="bg-linear-45 p-8 lg:flex md:flex relative items-center hidden from-blue-800 to-blue-700">
            <div className=" ">
              <div className="flex  items-center justify-center absolute top-9 left-9">
                <Logo bg={"bg-white"} color={"text-blue-800"} />
                <p className="font-manrope font-extrabold text-[26px] ms-2 text-white ">
                  Methodical
                </p>
              </div>
              <div>
                <p className="font-manrope font-bold text-[45px] w-100 leading-12 text-white ">
                  Master your flow with precision.
                </p>
                <p className="font-inter font-regular my-7 text-blue-400 w-100">
                  Experience the curated workspace designed for deep focus and
                  architectural clarity.
                </p>
              </div>
                <div className="flex">
                     <div className="w-57.5 p-5 bg-black/10  rounded-2xl">
                <div className="mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                  </svg>
                </div>
                <p className="text-white font-manrope font-bold text-[14px] ">
                  Intelligent Layering
                </p>
                <p className="font-inter font-regular text-gray-400 text-[14px]">
                  Focus on what matters with our tonal depth system.
                </p>
              </div>
              <div className="w-57.5 p-5 bg-black/10 ms-5 rounded-2xl">
                <div className="mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                </div>
                <p className="text-white font-manrope font-bold text-[14px] ">
                  Frictionless Speed
                </p>
                <p className="font-inter font-regular  text-gray-400 text-[14px]">
                  Built for high-velocity execution and rapid tasking.
                </p>
              </div>
                </div>
              <p className="text-blue-400/60 font-inter font-regular absolute bottom-9 text-[14px]">© 2026 Methodical Inc.  <span className="text-[7px]">●</span> Privacy First Architecture</p>
            </div>
          </div>
          {/* form */}
          <div className="flex items-center justify-center">
            <div className="h-screen lg:h-fit w-111 flex justify-center  items-center flex-col bg-white  lg:p-12 ">
              <div className=" self-start mb-10  ps-5 lg:ps-0 md:ps-0 ">
                <h2 className="font-manrope font-bold text-blue-900  text-3xl " >Create Account</h2>
                <p className="font-inter text-gray-500">Join the community of intentional builders.</p>
              </div>
              <form
                className="flex flex-col justify-center items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div>
                  <Input
                    placeholder={"Dexter Morgan"}
                    type={"text"}
                    label={"Full Name"}
                  />
                </div>
                <div className="mt-1">
                  <Input
                    placeholder={"name@company.com"}
                    type={"text"}
                    label={"Email Address"}
                  />
                </div>
                <div className="mt-1 ">
                  <Input
                    placeholder={"●●●●●●"}
                    type={"password"}
                    label={"Password"}
                  />
                </div>
                <p className="mb-8 text-[11px] self-start text-gray-400 mt-1">At least 8 characters with one uppercase and one symbol.</p>
                <Button>Create Account</Button>
              </form>
              <p className=" font-inter font-semibold text-[12px] mt-6 text-gray-500">
                Already have an account?{" "}
                <Link to={"/login"}>
                  {" "}
                  <button className="text-blue-800 cursor-pointer">
                    Log in
                  </button>{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
