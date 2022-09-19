import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../Auth/SignUpStyles";
import Header from "../Layout/Header";
import { MainContainer, Options, TestList } from "./HomePageStyles";
import Teacher from "./Teacher";
import Term from "./Term";

export default function HomePageTeachers() {
    const [teachersList, setTeachersList] = useState(null)
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
            const promise = axios.get(URL + '/teachers', config)
            promise.then(res => {
                setTeachersList(res.data)
            })
            promise.catch(error => alert(error.response.data))
        }
    }, [])

    return (
        <MainContainer>
            <Header />
            <Options>
                <ButtonStyled pressed="off" onClick={()=>navigate('/homepage')}>DISCIPLINAS</ButtonStyled>
                <ButtonStyled pressed="on" onClick={()=>navigate('/by-teacher')}>PESSOA INSTRUTORA</ButtonStyled>
                <ButtonStyled pressed="off" onClick={()=>navigate('/create-test')}>ADICIONAR PROVA</ButtonStyled>
            </Options>
            <TestList>
                {teachersList ?
                    teachersList.map((t, index) => <Teacher
                        key={index}
                        id={t.id}
                        name={t.name}
                    />)
                    :
                    'Carregando...'
                }
            </TestList>
        </MainContainer>
    )
}