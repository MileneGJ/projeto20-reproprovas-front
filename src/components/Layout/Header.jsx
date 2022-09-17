import { BsLayoutTextSidebar } from "react-icons/bs";
import {IoLogOutOutline} from 'react-icons/io5'
import { Logo } from "../Auth/SignUpStyles";
import { HeaderSpan } from "./HeaderStyles";

export default function Header () {
    return (
        <HeaderSpan>
            <Logo>
                <BsLayoutTextSidebar />
                <div>
                <h1>Repo</h1><h1>Provas</h1>
                </div>
            </Logo>
            <IoLogOutOutline />
        </HeaderSpan>
    )
}