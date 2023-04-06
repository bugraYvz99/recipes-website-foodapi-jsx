import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import { DetailedRecipe } from './Pages/DetailedRecipe';
import Sidebar  from './Components/Sidebar';


export default function App() {
  return (
    <Router>
<Sidebar/>
    <div className="container my-5">
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/recipes/:id" element={<DetailedRecipe/>}/>

      </Routes>
    </div>
  </Router>
  )
}