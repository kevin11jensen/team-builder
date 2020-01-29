import React, {useState} from 'react';

const Form = props => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        role: ''
    });

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name);
    }

    const submitHandler = e => {
        console.log('user.name');
        console.log('user.email');
        console.log('user.role');
        e.preventDefault();
        props.addNewInfo(user);
        setUser({username: '', email: '', role: ''})
    };

    return (
        <div className = 'form-container'>
        <form onSubmit={submitHandler}>
            <label htmlFor = 'name'>
                Name:
                <input
                    id = 'name'
                    type='text'
                    placeholder='Enter Name'
                    name='username'
                    value={user.username}
                    onChange={changeHandler}
                />
            </label><br />
            <label>
            Email:
                <input
                    id = 'email'
                    type='text'
                    placeholder='email@email.com'
                    name='email'
                    value={user.email}
                    onChange={changeHandler}
                />
            </label><br />
            <label>
            Role:
                <input
                    id = 'role'
                    type='text'
                    placeholder='Web Developer'
                    name='role'
                    value={user.role}
                    onChange={changeHandler}
                />
            </label><br />

            <button type = 'submit'>Add Team New Member</button>
            
        </form>
        </div>
    )
}

export default Form;