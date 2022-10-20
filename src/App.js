import './App.css';
import Home from './components/Home/Home';
import Personality from './components/Personality/Personality';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GoToTop from './components/GoToTop';


function App() {
  return (
    <Router>
      <div className='wrapper'>
        <div className='header'>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Personality' element={<Personality/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Services' element={<Services/>}/>
        </Routes>
        <Footer />
        <GoToTop />
      </div>
    </Router>
  );
}

export default App;
