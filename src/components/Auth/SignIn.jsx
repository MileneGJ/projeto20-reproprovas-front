import { BsLayoutTextSidebar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container, Forms, Logo } from "./SignUpStyles";

export default function SignIn () {
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
                <form>
                    <input type='email' placeholder="E-mail" />
                    <input type='password' placeholder="Senha" />
                    <div>
                    <Link to='/'>Não possuo cadastro</Link>
                    <button> ENTRAR </button>
                    </div>
                </form>
            </Forms>
        </Container>
    )
}