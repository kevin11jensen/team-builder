import React, {useState} from 'react';
import './App.css';

import Form from './components/Form';
import Users from './components/Users';


function App() {

const [info, setInfo]=useState([
  {
    id: 1,
    username: 'Kevin Jensen',
    email: 'kevinjensen1133@yahoo.com',
    role: 'Full Stack Web Developer'
  }
]);
const addNewInfo = user => {
      const newUser = {
        id: Date.now(),
        username: user.username,
        email: user.email,
        role: user.role
      };
      setInfo([...info, newUser]);

  return (
    <div className="App">
       
       
      
    </div>
  );
}
}
export default App;