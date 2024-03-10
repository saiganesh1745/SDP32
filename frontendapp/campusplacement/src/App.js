// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import MainNavBar from './main/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';

function App() {
  return (
    <div className="App">


<h2 align="center">Campus Placement Management System</h2>

     <Router>
      
      <MainNavBar/>
       {/* <AdminNavBar/>  */}
      
      </Router> 
         
    </div>
  );
}

export default App;
