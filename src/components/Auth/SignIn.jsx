import axios from "axios";
import { useState } from "react";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { ButtonStyled, Container, Forms, Logo } from "./SignUpStyles";

export default function SignIn () {
    const [authUser,setAuthUser] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()

    function authenticateUser (e) {
        e.preventDefault()
        const URL = 'https://projeto20-repoprovas-back-end.herokuapp.com'
        const promise = axios.post(URL+'/signin',authUser)
        promise.then(res=>{
            const token = res.data.token
            localStorage.setItem('token',token)
            navigate('/homepage')
        })
    }

    return (
        <Container>
            <Logo>
                <BsLayoutTextSidebar />
                <div>
                <h1>Repo</h1><h1>Provas</h1>
                </div>
            </Logo>
            <Forms>
                <h2>Login</h2>
                <form onSubmit={authenticateUser}>
                    <input type='email' placeholder="E-mail"  value={authUser.email} onChange={(e)=>{setAuthUser({...authUser,email:e.target.value})}} />
                    <input type='password' placeholder="Senha"  value={authUser.password} onChange={(e)=>{setAuthUser({...authUser,password:e.target.value})}} />
                    <div>
                    <Link to='/'>Não possuo cadastro</Link>
                    <ButtonStyled pressed="on" type='submit'> ENTRAR </ButtonStyled>
                    </div>
                </form>
            </Forms>
        </Container>
    )
}