import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
const Landing = () => {
    let [users,setUsers]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let responce =await fetch("https://panorbit.in/api/users.json")
            let data=await responce.json()
            setUsers(data.users)
            console.log(data.users)
        }
        fetchdata()
    })
    return ( 
            <div className="">
              {users.map((d)=>(
                <div className="">
                   <Link to='/'> <img width="50" height="50" src={d.profilepicture} alt="" /></Link>
                  <Link to='/'> <h4>{d.name}</h4></Link>
                </div>
              ))}
            </div>
     );
}
 
export default Landing;