import React, {useState} from 'react';

const Form = props => {

    const [member, setMember] = useState({
        username: '',
        email: '',
        role: ''
    });

    const handleChange = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
        console.log(event.target.name);
    }

    const submitHandler = event => {
        event.preventDefault();
        props.addNewInfo(member);
        setMember({username: '', email: '', role: ''})
    };

    return (
        <form onSubmit={submitHandler}>
            <label>
                Name:
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

            <button type = 'submit'>Add Team Member</button>
            
        </form>
    )
}

export default Form;