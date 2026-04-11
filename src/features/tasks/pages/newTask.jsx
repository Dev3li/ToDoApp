import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "../../../shared/Button";

export default function NewTask() {
  return (
    <>
    <div className="  relative ">
         <div className="grid grid-cols-8">
        <div className="col-span-4">
          {/* title page */}
          <div className="m-8">
            <p className="text-gray-500 text-[13px] font-inter ">
              Task Creation
            </p>
            <h2 className="font-bold font-manrope text-3xl text-blue-800">
              New Task
            </h2>
          </div>
          {/* ==========inputs========= */}
          <div>
            {/* Name */}
            <p className="ms-5 mb-1 text-gray-500 text-[12px]">Name Task</p>
            <div className="flex items-center relative py-1 ms-5 bg-gray-100 rounded-sm">
              <input
                type="text"
                placeholder="Task Title"
                className=" px-2 w-full ms-5 pb-3.5 mt-1 pt-2.5 text-gray-700 placeholder:text-[#C2C7D1] focus:outline-none focus:border-none "
              />
            </div>
            {/* Description */}
            <p className="ms-5 mb-1 mt-3 text-gray-500 text-[12px]">
              Description For Your Task
            </p>
            <div className="flex  items-center w-fill relative py-1 ms-5 bg-gray-100 rounded-sm">
              <textarea
                name="text"
                className="px-2 w-full ms-5 pb-3.5 mt-1 pt-2.5 text-gray-700  focus:outline-none focus:border-none "
              ></textarea>
            </div>
            {/* option */}
            <div className="mt-5">
              <div className="bg-blue-100/30 w-50 border border-gray-200 p-1 ms-5 rounded-md">
                <p className="ms-5 mb-1 mt-3 text-gray-500 text-[12px]">
                  Catgory
                </p>

                <input
                  type="text"
                  placeholder="Work, etc.."
                  className=" px-2 ms-5 pb-3.5 mt-1 pt-2.5 text-gray-700 placeholder:text-[#C2C7D1] focus:outline-none focus:border-none "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 flex flex-col  justify-center ms-10 ">
          <p className="ms-5 mb-5  text-gray-500 text-[12px]">Task Priority</p>

          <div className="flex flex-col gap-2 box-border">
            <label className="cursor-pointer w-50 ms-5">
              <input
                type="radio"
                name="Priority"
                value="high"
                className="hidden peer"
                defaultChecked
              />

              <div
                className="flex flex-col p-5 relative bg-blue-50 
                    peer-checked:bg-blue-100 
                    peer-checked:border-2
                    peer-checked:border-blue-300
                    
                    "
              >
                <span>High</span>
                <span className="text-gray-500 text-[12px]">
                  Critical path item
                </span>
                <span className="w-2 h-2 bg-red-500 absolute right-5 top-9 rounded-full"></span>
              </div>
            </label>

            <label className="cursor-pointer w-50 ms-5">
              <input
                type="radio"
                name="Priority"
                value="medium"
                className="hidden peer"
              />

              <div
                className="flex flex-col p-5 relative bg-blue-50 
                    peer-checked:bg-blue-100 
                    peer-checked:border-2
                    peer-checked:border-blue-300"
              >
                <span>Medium</span>
                <span className="text-gray-500 text-[12px]">
                  Requires prompt action
                </span>
                <span className="w-2 h-2 bg-blue-500 absolute right-5 top-9 rounded-full"></span>
              </div>
            </label>

            <label className="cursor-pointer w-50 ms-5">
              <input
                type="radio"
                name="Priority"
                value="low"
                className="hidden peer"
              />

              <div
                className="flex flex-col p-5 relative bg-blue-50 
                    peer-checked:bg-blue-100 
                    peer-checked:border-2
                    peer-checked:border-blue-300"
              >
                <span>Low</span>
                <span className="text-gray-500 text-[12px]">
                  For routine checkups
                </span>
                <span className="w-2 h-2 bg-gray-500 absolute right-5 top-9 rounded-full"></span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-10 fixed bottom-14 right-10">
        <button className="cursor-pointer text-gray-700">Cansel</button>
        <Button w={"w-45"} className="">
          Create Task <ArrowRightIcon className="size-5 ms-1" />
        </Button>
      </div>
    </div>
    </>
  );
}
