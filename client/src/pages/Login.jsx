import { Button } from 'components/Button';
import { Input } from 'components/Input'
import { Loading } from 'components/Loading';
import { Text } from 'components/Text';
import { useEffect } from 'react';
import { useState } from 'react';
import { Redirect, BrowserRouter as Router, useHistory } from 'react-router-dom'
import auth from 'auth/Authentication';
import { login } from 'services/AuthenticationApi';

export function Login(props) {

    const [state, setState] = useState({
        username: '',
        usernameError: '',
        password: '',
        passwordError: '',
        loading: false,
    })

    const onChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    useEffect(() => {
        auth.setHistory(props.history)
        if(auth.isAuthenticated()) {
            props.history.push('/')
        }
        
    }, [])

    const onSubmit = async () => {
        setState({
            ...state,
            passwordError: undefined
        })
        const {data, error} = await login(state.username, state.password)
        if (data) {
            auth.login(data)
        } else {
            setState({
                ...state,
                passwordError: error
            })
        }
    }

    const canSubmit = state.username && state.password
    const width = 'w-64 sm:w-80 lg:w-96'
    const theme = state.passwordError ? 'fail' : ''
    return (
            state.loading ?
                <Loading />
            : !auth.isAuthenticated() ?
            <div class='flex flex-col mx-8 mb-4 items-center gap-8'>
                <Text title='Login' theme='h1' />
                <Input theme={theme} placeholder='Username' width={width} name='username' subtitle={state.usernameError} onChange={onChange}/>
                <Input theme={theme} placeholder='Password' width={width} type="password" name='password' subtitle={state.passwordError} onChange={onChange}/>                    
                <Button theme='primary' title='Sing in' width={width} type='submit' disabled={!canSubmit} onClick={onSubmit}/> 
             </div>
            :
            <div/>
            
    );
}