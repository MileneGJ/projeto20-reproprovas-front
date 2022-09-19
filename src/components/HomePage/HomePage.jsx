import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../Auth/SignUpStyles";
import Header from "../Layout/Header";
import { MainContainer, Options, TestList } from "./HomePageStyles";
import Term from "./Term";

export default function HomePage() {
    const [termsList, setTermsList] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
    const URL = 'https://projeto20-repoprovas-back-end.herokuapp.com'
    const token = localStorage.getItem('token')
        if (!token) {
            navigate('/signin')
        } else {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const promise = axios.get(URL + '/terms', config)
            promise.then(res => {
                setTermsList(res.data)
            })
            promise.catch(error => alert(error.response.data))
        }
    }, [])

    return (
        <MainContainer>
            <Header />
            <Options>
                <ButtonStyled>DISCIPLINAS</ButtonStyled>
                <ButtonStyled>PESSOA INSTRUTORA</ButtonStyled>
                <ButtonStyled>ADICIONAR PROVA</ButtonStyled>
            </Options>
            <TestList>
                {termsList ?
                    termsList.map((t, index) => <Term
                        key={index}
                        id={t.id}
                        number={t.number}
                    />)
                    :
                    'Carregando...'
                }
            </TestList>
        </MainContainer>
    )
}