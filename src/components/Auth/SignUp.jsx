import { Link, useNavigate } from "react-router-dom";
import { ButtonStyled, Container, Forms, Logo } from "./SignUpStyles";
import {BsLayoutTextSidebar} from 'react-icons/bs'
import axios from 'axios'
import { useState } from "react";

export default function SignUp () {
    const [newUser,setNewUser] = useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const navigate = useNavigate()

    function sendNewUser(e){
        e.preventDefault()
        const URL = 'https://projeto20-repoprovas-back-end.herokuapp.com'
        const promise = axios.post(URL+'/signup',newUser)
        promise.then(()=>{
            navigate('/signin')
        })
        promise.catch((error)=>{
            alert(error.response.data)
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
                <h2>Cadastro</h2>
                <form onSubmit={sendNewUser}>
                    <input type='email' placeholder="E-mail" value={newUser.email} onChange={(e)=>{setNewUser({...newUser,email:e.target.value})}} />
                    <input type='password' placeholder="Senha" value={newUser.password} onChange={(e)=>{setNewUser({...newUser,password:e.target.value})}} />
                    <input type='password' placeholder="Confirme sua senha" value={newUser.confirmPassword} onChange={(e)=>{setNewUser({...newUser,confirmPassword:e.target.value})}} />
                    <div>
                    <Link to='/signin'>Já possuo cadastro</Link>
                    <ButtonStyled pressed="on" type='submit'> CADASTRAR </ButtonStyled>
                    </div>
                </form>
            </Forms>
        </Container>
    )
}