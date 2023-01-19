import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
`

const Username = styled.input`
    margin-bottom: 20px;
    padding: 10px;
    width: 200px;
`
const Password = styled.input`
    margin-bottom: 20px;
    padding: 10px;
    width: 200px;
`
const Button = styled.button`
    width: 100px;
    border: none;
    border-radius: 5px;
    padding: 10px;
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
        login(dispatch, { username, password })
    }

    return (
        <LoginContainer>
            <Username type={"text"} placeholder={"username"} onChange={e => setUsername(e.target.value)} />
            <Password type={"password"} placeholder={"password"} onChange={e => setPassword(e.target.value)} />
            <Button onClick={handleClick}>Login</Button>
        </LoginContainer>
    )
}

export default Login