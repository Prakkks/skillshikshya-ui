import { useEffect, useState } from "react"
import { task1_container } from "../constants/values"
import { AnimatePresence, motion } from "framer-motion";

const Task1 = () => {
    const [messageindex , setMessageIndex] = useState<number>(0);
 const [hoveredIndex, setHoveredIndex] = useState<number|null>(null);
   const [radiusX, setRadiusX] = useState(280);
  const [radiusY, setRadiusY] = useState(150);
   const [radiusX1, setRadiusX1] = useState(280);
  const [radiusY1, setRadiusY1] = useState(150);
  const [isHovered , setIsHovered] = useState(false);
  

  useEffect(() => {
  const timeInterval = setInterval(() => {
    setMessageIndex((prev) => (prev + 1) % task1_container.length);
  }, 3000);

  return () => clearInterval(timeInterval);
}, []);

const handleMouseEnter = () => {
    setRadiusX(600); 
    setRadiusY(300); 
     setRadiusX1(350); 
    setRadiusY1(200); 
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRadiusX(280); 
    setRadiusY(150); 
     setRadiusX1(280); 
    setRadiusY1(150);
    setIsHovered(false);
  };
 

  return (
    <section className="p-20 h-[100vh] w-full bg-[radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.15),_transparent_70%)]  "> 
    <div className="flex justify-center flex-col h-full z-50 transition-all duration-700 ease-in-out gap-2 md:gap-4 items-center relative "onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <p className=" text-gray-900 text-xl  sm:text-xl md:text-2xl " >Hear How They Level Up Their Game!</p>
        <p className=" font-extrabold text-xl sm:text-2xl md:text-4xl"> Skill <span className=" text-greenColor"> Masters </span> Unite! 🤝</p>
        <button className=" font-semibold active:outline-none outline-none text-gray-700 text-lg md:text-lg hover:-translate-x-2"  > View all Testimonials → </button>
    
    {
        task1_container.map( (item, index)=> {
            const total = task1_container.length;
            const angle = (index / total) * 2 * Math.PI; // in radians
            
   

            const x = -15+  radiusX * Math.cos(angle);
            const y = -20+  radiusY * Math.sin(angle);
            const x1 = -15+  radiusX1 * Math.cos(angle);
            const y1 = -20+  radiusY1 * Math.sin(angle);
             const delay = index * 0.3;
            
            if (index % 2 ===0)
            {return(
                <motion.div key={index} className= {`z-10 rounded-3xl bg-transparent relative group  `} onMouseEnter={() => setHoveredIndex(index)}  onMouseLeave={() => setHoveredIndex(null)}  style={{transform: `translate(${x}px, ${y}px)`,position: "absolute",}} 
                
                
                > 
                <motion.img src={item.img}  className={`z-10 rounded-[2rem] object-cover bg-transparent ${item.hover ?'  border-3 border-white  hover:shadow-[0_0_8px_rgba(110,231,183,0.8),0_0_15px_rgba(34,197,94,0.7),0_0_30px_rgba(21,128,61,0.6)] ' : ''  }`}
                animate={isHovered ? { y: [0, -20, 0] } : { y: 0 }}
                // transition={isHovered ? { repeat: Infinity, duration: 3, ease: "easeInOut" } : {}}
                transition={ isHovered ? { repeat: Infinity, duration: 3, ease: "easeInOut", delay } : {}}
                
                />
                
               
               
                {/* for star message */}

                 {  messageindex === index && item.message && 
                <div className=" absolute min-w-[60px] top-[40%] z-40 -translate-y-3/4  bg-white  rounded-xl translate-x-1/2 w-fit text-sm px-5 py-3   shadow-gray-300 shadow-lg transition-all " > {item.message}
                     <div className="absolute top-1/2 -left-2.5 rotate-90  w-0 h-0 border-l-8 border-l-transparent
                        border-r-8 border-r-transparent shadow-gray-300 shadow-lg 
                        border-t-8 border-t-white"></div>
                </div>
                }
                 {/* Animated hover content */}
      <AnimatePresence>
        {item.hover_text && hoveredIndex === index && (
          <motion.div
            initial={{ opacity: 0, scale: 0.05, y:-50  }}
            animate={{ opacity: 1, scale: 1, y:100 }}
            exit={{ opacity: 0, scale: 0.95, y:0 , transition: {duration:0} }}
            transition={{ duration: 4, ease: "easeInOut" }}
           
            className="absolute min-w-[420%] z-20 top-0 -left-[120%]   sm:p-7 p-3 text-sm  rounded-xl bg-white shadow-lg shadow-gray-300 "
          >
            <p className= " z-20 whitespace-pre-line">{item.hover_text.text}</p>
            <div className=" z-20 float-right">
              <p className="z-20 text-gray-900 text-sm font-semibold text-right">
                {item.hover_text.name}
              </p>
              <p className=" z-20 text-gray-900 text-sm text-right">
                {item.hover_text.sub}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
 {/* for hover message  */}
                
                <AnimatePresence> {
                    item.hover_video && hoveredIndex === index &&  
                    ( <motion.div
            initial={{ opacity: 0, scale: 0.05, y:0 }}
            animate={{ opacity: 1, scale: 2, y:-220 }}
            exit={{ opacity: 0, scale: 0.98, y:-100, transition: {duration:0} }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute z-20  top-0  left-0  rounded-2xl bg-white shadow-lg shadow-gray-300 "
          >
                    <img src={item.hover_video}  className="rounded-2xl  object-cover" />
                    </motion.div>)
                }
                </AnimatePresence>
                
               


          </motion.div>
            )}

            else
            {
                return(
                 <div
                  key={`emoji-${index}`}
                  className="absolute text-4xl z-0 bg-transparent "
                  style={{
                    transform: `translate(${x1}px, ${y1}px)`,
                    position: "absolute",
                  }}
                >
                   {  item.img && <img src={item.img} className="z-30 w-[100px] h-[100px] object-cover bg-transparent" />}
                    
                    </div>
                    )
            }


        })
    }
    </div>
    </section>
  )
}

export default Task1

