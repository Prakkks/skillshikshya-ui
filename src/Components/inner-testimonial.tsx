import {  useState } from "react";
import {  task2_container_hover } from "../constants/values";

type Props = {
  id: number;
};



const InnerTestinomial = ({ id }: Props) => {
    const task = task2_container_hover.find( (task) => task.id === id );
    


    if (!task) return null;
    const {content } = task;
    const [current, setCurrent] = useState(0);
    const total = task?.content.length  ;
    const firstelement = id === 1;
   const HandleClickLeft = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
};
    const HandleClickRight = () => { setCurrent((prev) => (prev+1 ) % total)};
    const currentvalue = content[current];

 

  return (
   <div
  className={`rounded-3xl overflow-y-hidden overflow-x-visible relative h-[20rem] p-7 py-10 text-white font-sans z-0`}
  style={{ background:  `url(${task.bg})`, backgroundSize: 'cover',backgroundPosition: "center" }}
>
   

  {/* ticket style */}
 
  {/* buttons */}
  <button disabled= {total <=1} className="absolute left-0 top-[50%] z-100 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-[#FAFAFA] text-black shadow-md rounded-full shadow-gray-500 flex items-center justify-center  transition "
    onClick={HandleClickLeft} > <img src="/assets/Task2/Icon-left.png"  /> </button>
  <button  disabled= {total <=1} className="absolute -right-0 top-[50%] z-100 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-[#FAFAFA] text-black shadow-md shadow-gray-400 rounded-full flex items-center justify-center  transition" onClick={HandleClickRight} >
     <img src="/assets/Task2/Icon-right.png"  /></button>

    <div className="flex flex-col  pl-3 md:pl-11 justify-center z-0">
        <p className={`md:whitespace-pre-line font-bold text-xl  ${firstelement ? 'text-right pr-10' : 'text-left'} `}> {currentvalue.title}</p>
        <img src={currentvalue.img} className="h-full absolute -bottom-4 left-0  pointer-events-none " />
    </div>
    { firstelement && <img className="absolute h-[80px] -rotate-45  -translate-y-16 left-[14%] object-cover " src="/assets/Task2/wow.png" />}
    { firstelement && <img className="absolute h-[100px] rotate-45  bottom-[10%] right-[20%] " src="/assets/Task2/wow.png" />}

{/* body */}


</div>
     
   

   
  )
}

export default InnerTestinomial