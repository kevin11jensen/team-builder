import React from 'react';

const TeamMembers = props => {
    return (
        <div className = 'member-list'>
            {props.info.map(user => (
                <div className = 'team-members' key= {props.id}>
                    <h2>{props.username}</h2>
                    <h3>{props.email}</h3>
                    <h3>{props.role}</h3>
                </div>
            ))}
        </div>
    )
}

export default TeamMembers;