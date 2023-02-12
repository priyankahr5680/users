import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../panorbit_styles/landingpages.css'
const LandingPages = () => {
    let[users,setUser]=useState([])
    let Navigate=useNavigate()
    useEffect(()=>{
        let fetchData=async()=>{
            let responce=await fetch("https://panorbit.in/api/users.json")
            let data=await responce.json()
             setUser(data.users)
            
        }
        fetchData()
    },[])
    let handle=(id)=>{
        Navigate(`/navbar`)
    }
    return ( 
        <div className="landingPage">
             <h3>Select an account</h3>
             {users.map(data=>(
                <div className="user_details">
                    <div className="user_account">
                      <a onClick={()=>{handle(data.id)}} href=""> <img width="50" height="50" src={data.profilepicture} alt="" />  </a>
                      <a onClick={()=>{handle(data.id)}} href=""> <h2>{data.name}</h2>  </a>
                      
                    </div>
                    <hr />
                </div>
            ))} 

        </div>
     );
}
 
export default LandingPages;