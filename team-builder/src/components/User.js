import React from 'react';

const User = props => {
    return (
        <div>
            <h2>{props.item.name}</h2>
            <h3>{props.item.email}</h3>
            <h3>{props.item.role}</h3>
        </div>
    )
}
export default User;