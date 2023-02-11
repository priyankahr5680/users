
import './App.css';
import LandingPages from './panorbit/landingpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PHome from './panorbit/pHome';
import Post from './panorbit/post';
import Gallary from './panorbit/gallary';
import Todo from './panorbit/Todo';
import Profile from './panorbit/Profile';
import Navbar from './panorbit/navbar';


function App() {
   
    
  return (

    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPages/>} />
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/propile' element={<PHome/>} />
        {/* <Route path='/propile/:id'element={<Profile/>}/> */}
         <Route path='/post' element={<Post/>} />
         <Route path='/gallery' element={<Gallary/>}/>
         <Route path='/to-do' element={<Todo/>} />
      
      </Routes>
      </BrowserRouter>
       
      
      </div>
  );
      }

export default App;
