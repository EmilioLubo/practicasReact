import {Route, Routes} from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Register from './Pages/Register/Register';


function App() {
  return (
    <div className="App"> 
        <NavBar />
        <Routes>
          <Route path='/' element='' />
          <Route path='/register' element={<Register/>} />
          <Route path='login' element='' />
          <Route path='checkout' element='' />
        </Routes>
    </div>
  );
}

export default App;
