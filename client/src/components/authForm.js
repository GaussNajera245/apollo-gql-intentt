import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { addAuthor } from '../queries/index';


const AuthForm = () => {
    let authName, authAge;
    const [addData , { error }] = useMutation( addAuthor );
    if (error) { console.log(error)};

    return (
        <>
        <form onSubmit={ e => {
                e.preventDefault();
                addData({ 
                    variables: { 
                        authorsName: authName.value, 
                        authorsAge: parseInt(authAge.value) 
                    }
                });
                authName.value = '';
                authAge.value = '';
            }}
        >
            <h2>New Author</h2>
            <div id="field">
                <label>Name:</label>
                <input ref={ n => {authName = n;}} />
            </div>
            <div id="field">
                <label>Age:</label>
                <input ref={ n => {authAge = n;}} />
            </div>
            <button type="submit">+</button>

        </form>
        </>
    )
}
 
export default AuthForm;