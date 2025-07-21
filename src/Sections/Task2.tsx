import InnerTestinomial from "../Components/inner-testimonial"
import Testinomial from "../Components/testinomial"
import { task2_container_hover } from "../constants/values"

const Task2 = () => {
  return (
    <section className="w-full h-full p-10 sm:p-15 md:p-20 md:px-36 bg-white">
        <div className="flex flex-col gap-1 sm:gap-3 md:gap-5">
        <p className=" text-gray-900 text-sm  sm:text-xl md:text-xl font-semibold  "> Your SkillShikshya Journey</p>
        <p className=" font-extrabold text-lg sm:text-2xl md:text-4xl"> <span className=" text-greenColor">Step </span> In. <span className="text-greenColor"> Skill </span> Up. <span className="text-greenColor"> Stand</span>  Out. 🚀 </p>
        </div>
        
        <div className="relative mt-5 sm:mt-10 w-full  bg-amber-200 ">

        <div className="grid grid-cols-1 sm:grid-cols-2  w-full gap-5 absolute ">
           
            <Testinomial id={1} />
            <Testinomial id={2} />
           <Testinomial id={3} disablehover />
           <Testinomial id={4} disablehover />
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2  w-full gap-5 absolute ">
           
            <InnerTestinomial id={1} key={1} />
            <InnerTestinomial id={2} key={2} />
         
        
        </div>
        </div>
    </section>  
  )
}
export default Task2