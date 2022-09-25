import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
     <Router>
       <Nav/>
       <Routes>
         <Route path='/about'  element={<About/>}></Route>
         <Route path='/portfolio' element={Portfolio}></Route>
         <Route path='/contact' element={Contact}></Route>
         <Route path='/resume' element={Resume}></Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
