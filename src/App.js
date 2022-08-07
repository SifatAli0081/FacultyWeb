import './App.css';
import { 
  BrowserRouter,
  Route, 
  Routes 
  
} from "react-router-dom";
import Home from './Component/Home';
import Faculty from './Component/Faculty';
import Team from './Component/Team';
import Contact from './Component/Contact';
import Error from './Component/Error';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="faculty" element={<Faculty/>}/>
      <Route path="team" element={<Team/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

