import React, { useState } from 'react';
import './Registry.scss';

const Registry = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email cant be empty');
    const [passwordError, setPasswordError] = useState('Password cant be empty');
    
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Not correct')
        } else {
            setEmailError("")
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Not correct')
            if (!e.target.value) {
                setPasswordError ('Not correct')
            }
                
        } else {
            setPasswordError ('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            default:
        }
    };

    return (
        <div className="Registry">
            <form>
                <div className='form-wrapper'>
                <h1 className='logo'>Log in</h1>
                {(emailDirty && emailError) && <div style={{ color: 'white' }}>{emailError} </div>}
                <input className='email' onChange={e => emailHandler(e) } value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='Enter your email'></input>
                {(passwordDirty && passwordError) && <div style={{ color: 'white' }}>{passwordError} </div>}
                <input className='password' onChange={e => passwordHandler(e) } value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter your password'></input>
                <button className='submit' type='submit'>Registration</button>
                </div>
            </form>
            
        </div>


    )

};




export default Registry;