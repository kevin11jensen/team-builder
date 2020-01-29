import React from 'react';

const Users = props => {
    
    return (
        <div className = 'member-list'>
            {props.info.map(user => (
                <div className = 'team-members' key= {user.id}>
                    <h2>{user.username}</h2>
                    <h3>{user.email}</h3>
                    <h3>{user.role}</h3>
                </div>
            ))}
        </div>
    )
}

export default Users;