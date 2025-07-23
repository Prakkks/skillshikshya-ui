import { useEffect, useState } from "react";

interface Props{
    row : number;
    column: number;
}

function createArray(n: number) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

// function shuffleboxvalue(rowsize = 9 , colsize=26) {
//   const result = [];
//   let min = 0;
//   let max = 26;
//   for (let i = 1; i <= rowsize; i++) {
//     const random = Math.floor(Math.random() * (max - min + 1)) + min;
//     result.push(random);
//     min = max + 1;
//     max = max + colsize;
//   }
//   return result;
// }
const shuffleValues = [
  [4, 34, 58, 96, 126, 154, 182, 205, 228],
  [20, 34, 72, 99, 126, 132, 182, 195, 210],
  [16, 37, 74, 97, 127, 141, 179, 198, 222],
  [25, 48, 72, 81, 110, 144, 157, 207, 215]
];


const Task4 = ({row,column}: Props) => {
 
  const total = column * row;

  const [array, setArray] = useState<number[]>([]);
  
  const [_, setHighlightRowIndex] = useState(0);
  const [highlightrow, setHighlightRow] = useState<number[]>(shuffleValues[0])

  useEffect(() => {
    
    setArray(createArray(total));

  }, []);

    useEffect(() => {
     const ourtimer = setInterval(() => {
      setHighlightRowIndex((prev) => {
        const nextIndex = (prev + 1) % shuffleValues.length;
        setHighlightRow(shuffleValues[nextIndex]);
        return nextIndex;
      });


      // setHighlightRow(shuffleboxvalue(row));
  }, 2000);

   return () => { clearInterval(ourtimer);}
  }, []);

  return (
    <section className="p-10">
      <h1 className="mb-4 text-xl font-bold">Task 4</h1>
      <div
        className="grid gap-0 grid-cols-[repeat(26,minmax(0,1fr))] w-full h-[80vh] grid-rows-9 border border-gray-200 ">
        {array.map((num) => {
            const ishightlighted = highlightrow.includes(num); 
            return(
          <div
            key={num}
            className= {`border transition-all duration-500 ease-in-out border-gray-200 text-white  ${ ishightlighted ? ' bg-violet-600' : 'bg-white' } `}
          >
          
          </div>)
            })}
      </div>
    </section>
  );
};

export default Task4;
