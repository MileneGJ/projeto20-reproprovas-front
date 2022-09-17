import { Link } from "react-router-dom";
import { Container, Forms, Logo } from "./SignUpStyles";
import {BsLayoutTextSidebar} from 'react-icons/bs'

export default function SignUp () {
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
                <form>
                    <input type='email' placeholder="E-mail" />
                    <input type='password' placeholder="Senha" />
                    <input type='password' placeholder="Confirme sua senha" />
                    <div>
                    <Link to='/signin'>Já possuo cadastro</Link>
                    <button> CADASTRAR </button>
                    </div>
                </form>
            </Forms>
        </Container>
    )
}