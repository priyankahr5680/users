import '../panorbit_styles/pHome.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const PHome = () => {
 

    let[users,setUser]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let responce=await fetch("https://panorbit.in/api/users.json")
            let data=await responce.json()
             setUser(data.users)
            
        }
        fetchData()
    },[])
    return (
        <div className="profile">
            <div className="profile_navbar">
        <Link className='link' to='/propile'> <h2>Profile</h2></Link> 
              <Link className='link' to='/post'> <h2>Posts</h2></Link> 
              <Link className='link' to='/gallery'> <h2>Gallary</h2></Link> 
              <Link className='link' to='/to-do'> <h2>To-Do</h2></Link>  
        </div>
        <div className='prof'>
            <div className='priyanka'>
            <div className='profh1'>
               <h2>Profile</h2>
               </div>
               <div className='profile1_details1'>
                   <img width="100" height="100px" src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="" />
                   <h2>Leanne Graham</h2>
                   </div>   
               </div>
               <hr /> 

            {/* <div className='profile1'> */}
                {/* {users.map(data=>(
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
                   </div> */}
                   {/* </div>
                ))} */}
                 <div className='profile1'>
                    <div className=''>
                 <div className='profile1_details'>
                <img width="100" height="100px" src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="" />
                <h2>Leanne Graham</h2>
                <h2>Username:Bret</h2>
                <h2>email:Sincere@april.biz</h2>
                <h2>phone:1-770-736-8031 x56442</h2>
                <h2>website:hildegard.org</h2>
                <hr />
                </div>
                <div className='company_details'>
                <h1>Company</h1>
                    <h2>name:Romaguera-Crona</h2>
                    <h2>catchPhrase:Multi-layered client-server neural-net</h2>
                    <h2>bs:harness real-time e-markets</h2>
                </div>
              
                </div>
                <hr />
           
            {/* <div className='Address'> */}
               {/* {users.map(data=>(
                <div className='Profile_address'>
                    <h1>Address</h1>
                    <h2>street:{data.address.street}</h2>
                    <h2>suite:{data.address.suite}</h2>
                    <h2>city:{data.address.city}</h2>
                    <h2>zipcode:{data.address.zipcode}</h2>
                </div>
               ))} */}
              <div className='Address'>
                <div className='Profile_address'>
                 <h1>Address</h1>
                    <h2>street:Kulas Light</h2>
                    <h2>suite:Apt. 556</h2>
                    <h2>city:Gwenborough</h2>
                    <h2>zipcode:92998-3874</h2>
                    </div>
                    <div className='map'>
                         <img width="400" height="300" src="https://performancedrive.com.au/wp-content/uploads/2016/08/Google-Maps.jpg" alt="" />
                    </div>
                    </div>
                    
        </div> 
        </div>
        </div>

      );
}
 
export default PHome;