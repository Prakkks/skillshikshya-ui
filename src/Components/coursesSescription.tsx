import { useState } from "react"
import { task3_container } from "../constants/values";
import { motion } from "framer-motion";

const CoursesDescription = () => {
    const [active , setActive] = useState<number>(1);
    // const [activeClass ,setActiveClass] = useState<string|null>(null); 

  return (
    <div className="flex  flex-wrap lg:flex-nowrap flex-row  gap-7  w-full justify-between mt-10">
      {task3_container.map((item, index) => {
       const isActive = (active === item.id);
    const activeClass = !isActive ? "bg-[#F9EBEC] text-[#C33241] origin-top-right   " : "text-[#F9EBEC]  bg-[#C33241] basis-1/2 origin-bottom-left basis-1/2  ";
    const headingtitle = !isActive ? "   " : "  ";
    const headings = isActive ? "   flex-row grow  " : " flex-col-reverse grow ";
    const headings_description = isActive ? "  whitespace-pre-line  justify-end  " : "  right-0 top-1/2  md:-translate-y-1/2 md:rotate-[-90deg]  md:absolute ";
        
    return (
      <div key={index} className={`relative group transition-all duration-1000 ease-in-out transform rounded-3xl flex flex-col-reverse grow p-5 md:p-10 ${activeClass}`}   onClick={() => setActive(item.id)}>
        
     {/* hover ------------- */}
         <div className={`absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 ${ isActive  ? 'group-hover:opacity-0' : 'group-hover:opacity-100'} transition-all duration-300 z-10 flex flex-col items-center`}>
        <img src="/assets/Task3/Hand-drawn shapes.png"  className="w-10 h-10" />
        <span className=" text-black-900 text-sm px-2 py-1 rounded mt-1">Click Me</span>
         </div>

        <div className={` flex  inset-0    ${headings}`}>
        

        <p className="text-9xl   font-black  text-center font-fredoka  tracking-tight ">{item.headingvalue}<span><sup>+</sup></span></p>
        <div className={` grow relative  p-4    `} > 
        <div className={` ${headings_description} md:gap-3 justify-center  items-left flex flex-col  `}>
        <p className=" font-semibold sm:text-3xl  "> {item.title}</p>
        <p className=""> {item.sub_title}</p>
         </div>

        </div>
        </div>
      
       {isActive && <>
        <div className=" flex flex-col gap-5 sm:gap-10 ">
            <div className="float-right text-right"> 
                <button className="text-base"> View all Courses &nbsp; <span className=" horizontalanimation font-bold" > → </span></button>
                 </div>
                <div className={`flex flex-row  justify-evenly gap-3 items-center p-2 `} >
                    <img src="/assets/Task3/logo-1.svg" className="  h-[50%] md:h-[70%] w-auto  lg:h-[80%]" />
                    <img src="/assets/Task3/logo-2.svg"  className=" h-[50%]  md:h-[70%] w-auto lg:h-[80%]" />
                    <img src="/assets/Task3/logo-3.svg"  className=" h-[50%]  md:h-[70%] w-auto lg:h-[80%]" />
                    <img src="/assets/Task3/logo-4.svg"  className=" h-[50%]  md:h-[70%] w-auto lg:h-[80%]" />
                </div>
           
        </div>
       </>}

      </div>
    );
  })}
    </div>   
  )
}

export default CoursesDescription