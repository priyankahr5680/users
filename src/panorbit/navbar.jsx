import { Link } from "react-router-dom"
import '../panorbit_styles/navbar.css'
const Navbar =()=>{
    return(
     <div className="Navbar">
        <div className="profile_navbar">
        <Link className='link' to='/propile'> <h2>Profile</h2></Link> 
              <Link className='link' to='/post'> <h2>Posts</h2></Link> 
              <Link className='link' to='/gallery'> <h2>Gallary</h2></Link> 
              <Link className='link' to='/to-do'> <h2>To-Do</h2></Link>  
        </div>
        <div className="nimage">
            <img width="900" height="550" src="https://th.bing.com/th/id/OIP.jnVG8iyv2wNyZKFrZoaTZwHaE7?pid=ImgDet&rs=1" alt="" />

        </div>
     </div>
    )
}
export default Navbar;