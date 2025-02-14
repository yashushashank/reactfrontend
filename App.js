
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Kids from './pages/Kids'
import Men from './pages/Men'
import Offers from './pages/Offers'
import Vmart from './pages/Vmart'
import Women from './pages/Women'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route index element={<Home/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/vmart' element={<Vmart/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
