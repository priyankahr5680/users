import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Profile = () => {
    let[users,setUser]=useState([])
    let params=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let responce=await fetch(`https://panorbit.in/api/users.json ${params.id}`)
            let data=await responce.json().then((d)=>(d.users))
            setUser(data)
            
        }
        fetchData()
    },[])

    return ( 
        <div>
            
            {users.map(data=>(
                    <div>
                   <div className='profile1_details'>
                    <img width="50" height="50" src={data.profilepicture} alt="" />
                    <h2>Username:{data.username}</h2>
                    <h2>e-mail:{data.email}</h2>
                    <h2>Phone:{data.phone}</h2>
                    <h2>Website:{data.website}</h2>
                   </div>
                   <div className='company_details'>
                    <h1>Company</h1>
                    <h2>name:{data.company.name}</h2>
                    <h2>catchPhrase:{data.company.catchPhrase}</h2>
                    <h2>bs:{data.company.bs}</h2>
                   </div> 
                    </div>
                ))} 
        </div>
     );
}
 
export default Profile;