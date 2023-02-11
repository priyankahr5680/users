import { Link } from "react-router-dom";
const Gallary = () => {
    return ( 
        <div className="post">
        <div className="profile_navbar">
        <Link className='link' to='/propile'> <h2>Profile</h2></Link> 
              <Link className='link' to='/post'> <h2>Posts</h2></Link> 
              <Link className='link' to='/gallery'> <h2>Gallary</h2></Link> 
              <Link className='link' to='/to-do'> <h2>To-Do</h2></Link>  
        </div>
       <div className="past_data">
           
       <h1 style={{fontSize:"100px"}}>Comming soon</h1>
       </div>
       
   </div>
    )
}
 
export default Gallary;