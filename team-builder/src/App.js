import React, {useState} from 'react';

import './App.css';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form';

function App() {

const [info, setInfo]=useState([
  {
    id: 1,
    username: 'Kevin Jensen',
    email: 'kevinjensen1133@yahoo.com',
    role: 'Full Stack Web Developer'
  }
]);
const addNewTeammate = teammate => {
      const newTeammate = {
        id: Date.now(),
        username: teammate.username,
        email: teammate.email,
        role: teammate.role
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