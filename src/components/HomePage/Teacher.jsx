import axios from 'axios'
import { useState } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { ListSpan } from './TermStyle'
import Test from './Test'

export default function Teacher({ id, name }) {
    const [testsList, setTestsList] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    function openTeacher(id) {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
            const URL = 'https://projeto20-repoprovas-back-end.herokuapp.com'
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const promise = axios.get(URL + `/tests/${id}`, config)
            promise.then(res => {
                console.log(res.data)
                setTestsList(res.data)})
            promise.catch(error => {
                setIsOpen(false)
                alert(error.response.data)
            })
        }
    }

    return (
        <>
            <ListSpan style={{ padding: '0 15px' }}
                onClick={()=>openTeacher(id)}>
                <h2>
                    {name}
                </h2>
                {isOpen ? <IoChevronUp /> : <IoChevronDown />}
            </ListSpan>
            {isOpen && testsList ?
                testsList.length > 0 ?
                    testsList.map((t, index) =>
                        <Test
                            key={index}
                            pdfUrl={t.pdfUrl}
                            name={t.name}
                            categoryName={t.categories.name}
                            detailName={t.teachersDisciplines.disciplines.name}
                        />)
                    : <p>Não há testes deste(a) instrutor(a) a serem exibidos</p> : null}
        </>
    )
}