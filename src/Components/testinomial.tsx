import { task2_container } from "../constants/values";

type Props = {
  id: number;
  disablehover?: boolean;
};

const Testinomial = ({ id, disablehover = false }: Props) => {
    const task = task2_container.find( (task) => task.id === id );
    const float_value = task?.text_alignment ; 
    
    
    
 

  return (
    <div className= {`${disablehover ? '' : ' group-card'} rounded-3xl relative  p-7 py-10  text-white font-sans z-0`}    style={{ backgroundColor: task?.bg_color , textAlign: task?.text_alignment  } }>
        
      <img src={task?.icons} className={` hidden z-10 md:block h-full absolute vertical-float ${task?.icon_position === 'left' ? '-left-14' : '-right-12'} top-16  `}   />
        
       <div className={` max-w-full md:max-w-[80%]  ` } style={{float: float_value }} >
        <h1 className=" font-bold text-xl sm:text-3xl mb-2 sm:mb-3 "> {task?.heading} </h1>
        <p className="  text-lg sm:text-xl  mb-3 sm:mb-6 "> {task?.sub_heading}</p>
        <p className=" text-md font-extralight text-gray-200 sm:text-lg md:whitespace-pre-line  " > {task?.description}</p>
       </div>
    </div>

   
  )
}

export default Testinomial