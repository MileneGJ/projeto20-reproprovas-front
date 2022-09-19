import axios from 'axios'
import { useState } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { TestList } from './HomePageStyles'
import { ListSpan } from './TermStyle'
import Test from './Test'

export default function Discipline({ id, termId, name }) {
    const [testsList, setTestsList] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    function openDiscipline(id, termId) {
        setIsOpen(true)
        const URL = 'https://projeto20-repoprovas-back-end.herokuapp.com'
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL + `/tests/${termId}/${id}`, config)
        promise.then(res => setTestsList(res.data))
        promise.catch(error => {
            setIsOpen(false)
            alert(error.response.data)
        })
    }

    return (
        <>
            <ListSpan style={{ padding: '0 15px' }}
                onClick={() => openDiscipline(id, termId)}>
                <h3>
                    {name}
                </h3>
                {isOpen ? <IoChevronUp /> : <IoChevronDown />}
            </ListSpan>
            {testsList ?
                TestList.length > 0 ?
                    testsList.map((t, index) =>
                        <Test
                            key={index}
                            pdfUrl={t.pdfUrl}
                            name={t.name}
                            categoryName={t.categories.name}
                            teacherName={t.teachersDisciplines.teachers.name}
                        />)
                    : <p>Não há testes desta disciplina a serem exibidos</p>: null}
        </>
    )
}