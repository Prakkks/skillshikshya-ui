import Task1 from "./Sections/Task1"
import Task2 from "./Sections/Task2"
import Task3 from "./Sections/Task3"
import Task4 from "./Sections/Task4"

const App = () => {
  return (
    <>
    <Task1 />
    <Task2 />
    <Task4 row={9} column={26} />
    <Task3 />
    </>
  )
}

export default App