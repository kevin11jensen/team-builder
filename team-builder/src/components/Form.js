import React, { useState } from 'react';

const Form = props => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        role: ''
    });

    const changeHandler = e => {
        setFormState({...formState, [e.target.name]: e.target.value});

    };

    const submitHandler = e => {
        e.preventDefault();
        props.addToList(formState);
        setFormState({name: '', email: '', role: ''});
    };

    return (
        <div className = 'form-container'>
            <form onSubmit = {submitHandler}>
                <label htmlFor='name'>Name:
                    <input
                        id= 'name'
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                        value={formState.name}
                        onChange={changeHandler}
                    />
                
                </label>

                <label htmlFor='email'>Email:
                    <input
                        id= 'email'
                        type='text'
                        name='email'
                        placeholder='Enter Email'
                        value={formState.email}
                        onChange={changeHandler}
                    />
                
                </label>

                <label htmlFor='role'>Role:
                    <input
                        id= 'role'
                        type='text'
                        name='role'
                        placeholder='Enter Role'
                        value={formState.role}
                        onChange={changeHandler}
                    />
                
                </label>
            
                <button type = 'submit'>Add User</button>

            </form>
        </div>
    )
}

export default Form;