import './App.css';
import Add from './Components/Add';
import Crud from './Components/Crud';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Update from './Components/Update';
import Read from './Components/Read';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Crud/>} />
          <Route path='/add' element={<Add/>}/>
          <Route path='update/:id' element={<Update/>}/>
          <Route path='read/:id' element={<Read/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
