import { BsLayoutTextSidebar } from "react-icons/bs";
import {IoLogOutOutline} from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import { Logo } from "../Auth/SignUpStyles";
import { HeaderSpan } from "./HeaderStyles";

export default function Header () {
    const navigate = useNavigate()
    function logOut(){
        localStorage.removeItem('token')
        navigate('/signin')
    }

    return (
        <HeaderSpan>
            <Logo onClick={()=>navigate('/homepage')}>
                <BsLayoutTextSidebar />
                <div>
                <h1>Repo</h1><h1>Provas</h1>
                </div>
            </Logo>
            <IoLogOutOutline onClick={logOut} />
        </HeaderSpan>
    )
}