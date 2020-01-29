import React, {useState} from 'react';

const Form = props => {

    const [member, setMember] = useState({
        username: '',
        email: '',
        role: ''
    });

    const handleChange = e => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name);
    }

    const submitHandler = e => {
        console.log('member.name');
        console.log('member.email');
        console.log('member.role');
        e.preventDefault();
        props.addNewTeammate(member);
        setMember({username: '', email: '', role: ''})
    };

    return (
        <form onSubmit={submitHandler}>
            <label>
                Name:
                <input
                    type='text'
                    placeholder='Kevin Jensen'
                    name='username'
                    value={member.username}
                    onChange={handleChange}
                />
            </label><br />
            <label>
            Email:
                <input
                    type='text'
                    placeholder='email@email.com'
                    name='email'
                    value={member.email}
                    onChange={handleChange}
                />
            </label><br />
            <label>
            Role:
                <input
                    type='text'
                    placeholder='Web Developer'
                    name='role'
                    value={member.role}
                    onChange={handleChange}
                />
            </label><br />

            <button type = 'submit'>Add Team New Member</button>
            
        </form>
    )
}

export default Form;