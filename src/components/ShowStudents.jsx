import { useEffect, useState } from "react"
import axios from 'axios'

export const ShowStudents = () => {
  const [data,setData] = useState([]);
  const [Sort,setSort] = useState("")
  const [order,setOrder] = useState("")

  useEffect(()=>{
    getData()
  },[])
  const getData = () =>{
    axios.get("http://localhost:8080/students").then((res)=>setData(res.data))
  } 
  const handleSort = () =>{
    if(Sort=="first_name" && order=="asc"){
      axios.get("http://localhost:8080/students").then((res)=>setData(

        res.data.sort(function(a, b) {
          const nameA = a.first_name.toUpperCase(); 
          const nameB = b.first_name.toUpperCase(); 
          if (nameA < nameB) return -1;
          if (nameA > nameB)  return 1;
          })))
        }
      else if(Sort=="first_name" && order=="desc"){
        axios.get("http://localhost:8080/students").then((res)=>setData(
  
          res.data.sort(function(a, b) {
            const nameA = a.first_name.toUpperCase(); 
            const nameB = b.first_name.toUpperCase(); 
            if (nameA < nameB) return 1;
            if (nameA > nameB)  return -1;
            })))
          }
          else if(Sort=="email" && order=="asc"){
            axios.get("http://localhost:8080/students").then((res)=>setData(
      
              res.data.sort(function(a, b) {
                const nameA = a.email.toUpperCase(); 
                const nameB = b.email.toUpperCase(); 
                if (nameA < nameB) return 1;
                if (nameA > nameB)  return -1;
                })))
              }
              else if(Sort=="email" && order=="desc"){
                axios.get("http://localhost:8080/students").then((res)=>setData(
          
                  res.data.sort(function(a, b) {
                    const nameA = a.email.toUpperCase(); 
                    const nameB = b.email.toUpperCase(); 
                    if (nameA < nameB) return -1;
                    if (nameA > nameB)  return 1;
                    })))
                  }  

                  else if(Sort=="gender" && order=="asc"){
                    axios.get("http://localhost:8080/students").then((res)=>setData(
              
                      res.data.sort(function(a, b) {
                        const nameA = a.gender.toUpperCase(); 
                        const nameB = b.gender.toUpperCase(); 
                        if (nameA < nameB) return 1;
                        if (nameA > nameB)  return -1;
                        })))
                      } 


                      else if(Sort=="gender" && order=="desc"){
                        axios.get("http://localhost:8080/students").then((res)=>setData(
                  
                          res.data.sort(function(a, b) {
                            const nameA = a.gender.toUpperCase(); 
                            const nameB = b.gender.toUpperCase(); 
                            if (nameA < nameB) return -1;
                            if (nameA > nameB)  return 1;
                            })))
                          }

                     
                          else if(Sort=="tenth_score" && order=="desc"){
                            axios.get("http://localhost:8080/students").then((res)=>setData(
                      
                              res.data.sort(function(a, b) {
                               return b.tenth_score-a.tenth_score;
                                })))
                              }   
                              else if(Sort=="tenth_score" && order=="asc"){
                                axios.get("http://localhost:8080/students").then((res)=>setData(
                          
                                  res.data.sort(function(a, b) {
                                   return a.tenth_score-b.tenth_score;
                                    })))
                                  }    
            
                                  else if(Sort=="twelth_score" && order=="asc"){
                                    axios.get("http://localhost:8080/students").then((res)=>setData(
                              
                                      res.data.sort(function(a, b) {
                                       return a.twelth_score-twelth_score;
                                        })))
                                      }
                     
          
    else if(Sort =="twelth_score" && order=="desc"){
      axios.get("http://localhost:8080/students").then((res)=>setData(res.data.sort((a,b)=>{
        return b.twelth_score - a.twelth_score;
        })))
    }
  }
  


  console.log(Sort,order)
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select onChange={(e)=>{setSort(e.target.value)}}
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="email">Email</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select onChange={(e)=>{setOrder(e.target.value)}}
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={handleSort}>sort</button>
      </div>
      <table className="table" style={{'border':'1px'}}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((e)=>{
            return (
              <tr className="row">
                <td className="first_name">{e.first_name}</td>
                <td className="last_name">{e.last_name}</td>
                <td className="email">{e.email}</td>
                <td className="gender">{e.gender}</td>
                <td className="age">{e.age}</td>
                <td className="tenth_score">{e.tenth_score}</td>
                <td className="twelth_score">{e.twelth_score}</td>
                <td className="preferred_branch">{e.preferred_branch}</td>
              </tr>

            )
          })}
        </tbody>
      </table>
    </div>
  );
};
