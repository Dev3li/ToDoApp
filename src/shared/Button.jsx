

{/* //      */}

export default function Button({children,w,h}) {
  return(
    <>
      <button  className={`${w} ${h} text-white font-manrope font-bold  py-1.5 cursor-pointer flex justify-center items-center rounded-lg  bg-blue-800`}>
        {children} 
      </button>
    </> 
  )
}
// w-86 h-14