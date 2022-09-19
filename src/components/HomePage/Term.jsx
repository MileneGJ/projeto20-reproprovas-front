import axios from 'axios'
import { useState } from 'react'
import {IoChevronDown, IoChevronUp} from 'react-icons/io5'
import Discipline from './Discipline'
import { ListSpan } from './TermStyle'

export default function Term({ id, number }) {
    const [disciplinesList, setDisciplinesList] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

        function openTerm(id) {
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
        const promise = axios.get(URL + `/disciplines/${id}`, config)
        promise.then(res => setDisciplinesList(res.data))
        promise.catch(error => {
            setIsOpen(false)
            alert(error.response.data)})
        }
    }
        return (
            <>
                <ListSpan onClick={() => openTerm(id)}>
                    <h2>
                        {`${number}° Período`}
                    </h2>
                    {isOpen?<IoChevronUp />:<IoChevronDown />}
                </ListSpan>
                {isOpen&&disciplinesList?
                disciplinesList.length>0?
                disciplinesList.map((d,index)=>
                <Discipline 
                key={index}
                id={d.id}
                termId={id}
                name={d.name}
                />)
                :<p>Não há disciplinas deste período a serem exibidas</p>
            :null}
            </>
        )
    }