import CoursesDescription from "../Components/coursesSescription"


const Task3 = () => {
  return (
    <section className="w-full p-10 sm:p-15 md:p-20 md:px-40 bg-white">
        <div className="flex flex-col gap-1 sm:gap-3 md:gap-5">
        <p className=" text-gray-900 text-sm  sm:text-xl md:text-xl   "> Explore our classes and master trending skills!</p>
        <p className=" font-extrabold text-[#2B2B2B] text-lg sm:text-2xl md:text-4xl">
             Dive Into <span className=" text-[#1DA077]"> What's Hot Right Now! 🔥</span> 
        </p>


        <CoursesDescription />

        </div>
       
      
       
    </section>  
  )
}
export default Task3