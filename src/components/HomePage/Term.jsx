import axios from 'axios'
import { useState } from 'react'
import {IoChevronDown, IoChevronUp} from 'react-icons/io5'
import Discipline from './Discipline'
import { ListSpan } from './TermStyle'

export default function Term({ id, number }) {
    const [disciplinesList, setDisciplinesList] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

        function openTerm(id) {
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
        return (
            <>
                <ListSpan onClick={() => openTerm(id)}>
                    <h3>
                        {`${number}° Período`}
                    </h3>
                    {isOpen?<IoChevronUp />:<IoChevronDown />}
                </ListSpan>
                {disciplinesList?disciplinesList.map((d,index)=>
                <Discipline 
                key={index}
                id={d.id}
                termId={id}
                name={d.name}
                />)
                :null}
            </>
        )
    }