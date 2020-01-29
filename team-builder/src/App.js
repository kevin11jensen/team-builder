import React, {useState} from 'react';
import './App.css';

import Form from './components/Form';
import TeamMembers from './components/TeamMembers';


function App() {

const [info, setInfo]=useState([
  {
    id: 1,
    username: 'Kevin Jensen',
    email: 'kevinjensen1133@yahoo.com',
    role: 'Full Stack Web Developer'
  }
]);
const addNewTeammate = member => {
      const newTeammate = {
        id: Date.now(),
        username: member.username,
        email: member.email,
        role: member.role
      };
      setInfo([...info, newTeammate]);

  return (
    <div className="App">
       <Form addNewTeammate={addNewTeammate}/>
       <TeamMembers info={info} />
      
    </div>
  );
}
}
export default App;