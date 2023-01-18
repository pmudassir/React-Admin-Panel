import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'

const LoginContainer = styled.div`
    flex: 4;
    padding: 20px;
    align-items: center;
`

const LoginItems = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px;
    padding: 20px;
`
const Username = styled.input`
    margin-bottom: 30px;
`
const Password = styled.input`
    margin-bottom: 30px;
`
const Button = styled.button`
    width: 80px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    background-color: darkblue;
    color: white;
    cursor: pointer;
    font-size: 16px;
`

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
    }

    return (
        <LoginContainer>
            <LoginItems>
                <Username type={"text"} placeholder={"username"} onChange={e => setUsername(e.target.value)} />
                <Password type={"password"} placeholder={"password"} onChange={e => setPassword(e.target.value)} />
                <Button onClick={handleClick}>Login</Button>
            </LoginItems>
        </LoginContainer>
    )
}

export default Login