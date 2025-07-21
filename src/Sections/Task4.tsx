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

function shuffleboxvalue(rowsize = 9 , colsize=26) {
  const result = [];
  let min = 0;
  let max = 26;
  for (let i = 1; i <= rowsize; i++) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(random);
    min = max + 1;
    max = max + colsize;
  }
  console.log("result= ", result);
  return result;
}

const Task4 = ({row,column}: Props) => {
 
  const total = column * row;

  const [array, setArray] = useState<number[]>([]);
  const [highlightrow, setHighlightRow] = useState<number[]>([])

  useEffect(() => {
    
    setArray(createArray(total));

  }, []);

    useEffect(() => {
      const ourtimer =   setInterval(()=> (
            setHighlightRow(shuffleboxvalue(row))
        ), 2000);

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
