import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './AllRoutes';
import { getquestions } from './actions/askquestions';
import { getusers } from './actions/users';

function App() {
  var dispatch=useDispatch();
  
  useEffect(() => {
    dispatch(getquestions());
    dispatch(getusers());
  }, [dispatch])
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
