import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Sign.scss';



const Sign = () => {

 const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email cant be empty');
    const [passwordError, setPasswordError] = useState('Password cant be empty');
    const [firstname, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('First name cant be empty');
    const [firstNameDirty, setfirstNameDirty] = useState(false);
    const [lastname, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('Last name cant be empty');
    const [lastNameDirty, setLastNameDirty] = useState(false);
    const [username, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState('Username cant be empty');
    const [userNameDirty, setUserNameDirty] = useState(false);

    useEffect (() => {

    }, [email,password,firstname,lastname,username])








    
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
                setPasswordError('Not correct')
            }
                
        } else {
            setPasswordError('')
        }
    };

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)

        const re = /^[a-zA-Z]/
        if (!re.test(e.target.value)) {
            setFirstNameError('Not correct')
        } else {
            setFirstNameError("")
        }
    };

    const lastNameHandler = (e) => {
        setLastName(e.target.value)

        const re = /^[a-zA-Z]/
        if (!re.test(e.target.value)) {
            setLastNameError('Not correct')
        } else {
            setLastNameError("")
        }
    };

    const userNameHandler = (e) => {
        setUserName(e.target.value)

        const re = /^[a-zA-Z]/
        if (!re.test(e.target.value)) {
            setUserNameError('Not correct')
        } else {
            setUserNameError("")
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'firstname':
                setfirstNameDirty(true);
                break;
            case 'lastname':
                setLastNameDirty(true);
                break;
            case 'username':
                setUserNameDirty(true);
                break;
            default:
        }
    };

    const url = `https://jsonplaceholder.typicode.com/posts`

    const authentification = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            username: username
        }
        
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                return res.json()
            })
            .then(newRes => {
                console.log(newRes)
            });
    }
    
  
    
    return (
        <div className="Sign">
        <form>
                <div className='sign-wrapper'>
                <h1 className='logo' >Sign in</h1>
                {(emailDirty && emailError) && <div style={{ color: 'white' }}>{emailError} </div>}
                <input className='email' onChange={e => emailHandler(e) } value={email} onBlur={e => blurHandler(e)} name='email' type="email" placeholder='Enter your email'></input>
                {(passwordDirty && passwordError) && <div style={{ color: 'white' }}>{passwordError} </div>}
                <input className='password' onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter your password'></input>
                {(firstNameDirty && firstNameError) && <div style={{ color: 'white' }}>{firstNameError} </div>}
                <input className='firstName' onChange={e => firstNameHandler(e)} value={firstname} onBlur={e=> blurHandler(e)} name='firstname' type="text" placeholder='Enter your firstname'></input>
                {(lastNameDirty && lastNameError) && <div style={{ color: 'white' }}>{lastNameError} </div>}
                <input className='lastName' onChange={e => lastNameHandler(e)} value={lastname} onBlur={e=> blurHandler(e)} name='lastname' type="text" placeholder='Enter your lastname'></input>
                {(userNameDirty && userNameError) && <div style={{ color: 'white' }}>{userNameError} </div>}
                <input className='userName' onChange={e => userNameHandler(e)} value={username} onBlur={e=> blurHandler(e)} name='username' type="text" placeholder='Come up with your username'></input>
                  
                    <select className='sex'>
                        <option>Man</option>
                        <option>Woman</option>
                </select>
                <button className='submit' onClick={e => authentification(e)} >Registration</button>
                </div>
            </form>
        </div>
        
    )
};



export default Sign;

