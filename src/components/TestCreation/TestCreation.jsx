import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled, Forms } from "../Auth/SignUpStyles";
import { MainContainer, Options } from "../HomePage/HomePageStyles";
import Header from "../Layout/Header";

export default function TestCreation () {
    const [teachersList,setTeachersList] = useState(null)
        const URL = 'https://projeto20-repoprovas-back-end.herokuapp.com'
        const token = localStorage.getItem('token')
    const [newTest,setNewTest] = useState({
        name:"",
        pdfUrl:"",
        category:"",
        teacher:"",
        discipline:""
    })
    const navigate = useNavigate()

    useEffect(()=>{
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
    },[])

    function sendNewTest (e) {
        e.preventDefault()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(URL+'/tests',newTest,config)
        promise.then(()=>navigate('/homepage'))
        promise.catch(error => alert(error.response.data))
    }

    return (
        <MainContainer>
            <Header />
            <Options>
                <ButtonStyled pressed="off" onClick={()=>navigate('/homepage')}>DISCIPLINAS</ButtonStyled>
                <ButtonStyled pressed="off" onClick={()=>navigate('/by-teacher')}>PESSOA INSTRUTORA</ButtonStyled>
                <ButtonStyled pressed="on" onClick={()=>navigate('/create-test')}>ADICIONAR PROVA</ButtonStyled>
            </Options>
            <Forms>
            <h2>Adicionar nova prova</h2>
                <form onSubmit={sendNewTest}>
                    <input type='text' placeholder="Nome do arquivo" value={newTest.name} onChange={(e)=>{setNewTest({...newTest,name:e.target.value})}} />
                    <input type='url' placeholder="Url para pdf do arquivo" value={newTest.pdfUrl} onChange={(e)=>{setNewTest({...newTest,pdfUrl:e.target.value})}} />
                    <select id='category' name='category' onChange={(e)=>{setNewTest({...newTest,category:e.target.value})}}>
                        <option value="">Categoria da prova</option>
                        <option value="Projeto">Projeto</option>
                        <option value="Prática">Prática</option>
                        <option value="Recuperação">Recuperação</option>
                    </select>
                    <select id='teacher' name='teacher' onChange={(e)=>{setNewTest({...newTest,teacher:e.target.value})}} >
                        <option value="">Nome da pessoa instrutora</option>
                        {teachersList?
                        teachersList.map((t,index)=>
                        <option key={index} value={t.name}>{t.name}</option>)
                        :'Carregando...'}
                    </select>
                    <input type='text' placeholder="Disciplina" value={newTest.discipline} onChange={(e)=>{setNewTest({...newTest,discipline:e.target.value})}} />
                    <ButtonStyled pressed="on" type='submit'> CADASTRAR </ButtonStyled>
                </form>
            </Forms>
        </MainContainer>
    )
}