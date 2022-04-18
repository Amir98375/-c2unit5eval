import { useState } from "react";
import  axios  from 'axios'

export const AddStudent = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setlastName] = useState('')
  const [email,setEmail] = useState('')
  const [gender,setGender] = useState('')
  const [Age,setAge] = useState('')
  const [tenthscore,settenthscore] = useState('')
  const [twelthScore,settwelthScore] = useState('')
  const [selectbtn,setselectbtn] = useState('')
  const userData = {
    first_name:firstName,
    last_name:lastName,
    email,
    gender,
    age:Age,
    tenth_score:tenthscore,
    twelth_score:twelthScore,
    preferred_branch:selectbtn
  }
  //console.log(userData)
  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/students",userData).then((res)=>console.log("added"))
  
}
  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div>
        Firstname:{" "}
        <input onChange={(e)=>{setFirstName(e.target.value)}}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input onChange={(e)=>setlastName(e.target.value)}
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input onChange={(e)=>setEmail(e.target.value)}
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input  onChange={(e)=>setGender(e.target.value)}
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input  onChange={(e)=>setGender(e.target.value)}
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input onChange={(e)=>{e.target.value>50?alert('Invalid age'):setAge(e.target.value)}}
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input onChange={(e)=>{e.target.value>100?alert("score should not be greater than 100"):settenthscore(e.target.value)}}
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input onChange={(e)=>{e.target.value>100?alert("score should not be greater than 100"):settwelthScore(e.target.value)}}
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select  onChange={(e)=>setselectbtn(e.target.value)}
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
