import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"
const Profile=()=>{
    // let[user,setUser]=useState([])
    // let params=useParams()
    // useEffect(()=>{
    //     let fetchdata=async()=>{
    //         let responce=await fetch("https://panorbit.in/api/users.json")
    //         let data=await responce.json().then((d)=>(d.users))
    //         data.map((d)=>{
    //             if(d.id==params.id){
    //                 setUser(d)
    //             }
    //         })
    //         fetchdata()
    //     }
    // })
    return(
        <div className="">
            {/* <h1>{user.name}</h1>
            <img src={user.profilepicture} alt="" />
            <h2>username {user.username}</h2> */}
           <h1>welocomee</h1>
        </div>
    )
}
export default Profile;