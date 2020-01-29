import React, {useState} from 'react';

import User from './User';
import Form from './Form';




const List = () => {
    const [list, setList] = useState([
        {id: 1, name: 'Kevin Jensen', email: 'kevinjensen1133@yahoo.com', role: 'Full Stack Web Developer'}
    ]);

    const addToList = newList => {
        const updatedList = {
            id: Date.now(),
            name: newList.name,
            email: newList.email,
            role: newList.role
        };
        setList([...list, updatedList]);
    };

    return (
        <div>
            <h1>Welcome to Team Builder</h1>
            <div>
                <Form addToList = {addToList} />
                
            </div>
            <div>
                {list.map(item => {
                    return <User item = {item} key={item.id} />
                })}    
            </div>
        </div>
    )
}

export default List;