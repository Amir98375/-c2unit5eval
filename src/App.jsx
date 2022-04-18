import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [isToggle,setToggle] = useState(true)
  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>isToggle ? setToggle(false):setToggle(true)}> 
      {isToggle?"Add new Student":"show students list"} </button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */
         isToggle ? <ShowStudents/>:<AddStudent/>
      }
      {/* make sure the table is shown initially, do not show form initially */
      // <AddStudent/>
      }
      {/* make sure to show either of them do not both together */
      // <ShowStudents/>
      }
    </div>
  );
}

export default App;
