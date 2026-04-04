

{/* //      */}

export default function Button({children}) {
  return(
    <>
      <button  className="w-86 h-14 text-white font-manrope font-bold  py-1.5 cursor-pointer flex justify-center items-center rounded-lg  bg-blue-800">
        {children} 
      </button>
    </> 
  )
}
