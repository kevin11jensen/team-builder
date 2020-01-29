import React from 'react';

const TeamMembers = props => {
    return (
        <div className = 'member-list'>
            {props.info.map(member => (
                <div className = 'team-members' key= {member.id}>
                    <h2>{member.username}</h2>
                    <h3>{member.email}</h3>
                    <h3>{member.role}</h3>
                </div>
            ))}
        </div>
    )
}

export default TeamMembers;