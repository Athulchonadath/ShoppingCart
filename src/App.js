import logo from './logo.svg';
// import './App.css';
import Index from './components/Index/Index';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Notebook from './components/Notebook/Notebook';
import Sanitizer from './components/Sanitizer/Sanitizer';
import Bag from './components/Bag/Bag';
// import Banner from './components/banner/Banner';


function App() {
  return (
    <Router>
       <Routes>
       
        <Route path='/' element={<Nav/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
         <Route path='/note' element={<Notebook/>}>  </Route>
        <Route path='/sanit' element={<Sanitizer/>}> </Route>
        <Route path='/bg' element={<Bag/>}> </Route>

       </Routes>
     </Router> 
    
    
  //  <Feature/>
  // <Sample/>
  // <>
  // <Index/>
  // <Banner/>
  // </>
  // <Nav/>
  );
}

export default App;
