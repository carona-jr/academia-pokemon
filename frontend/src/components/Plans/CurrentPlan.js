import React, { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CardImage from 'react-bootstrap/CardImg'
import NavLink from 'react-bootstrap/NavLink'

import Spinner from 'react-loading'

import { planData } from '../../utils/planData'

import { api } from '../../services/api'

export default function CurrentPlan() {
    const [plan, setPlan] = useState()
    const [formattedDate, setFormattedDate] = useState()
    const user = localStorage.getItem('cpf')

    async function loadCurrentPlan() {
        try {
            const response = await api.get('/plano', {
                headers: {
                    Authorization: 'Bearer ' + user
                }
            })
            setPlan({ number: response.data.codigo_plano, data_de_inicio: response.data.data_de_inicio })
            const today = new Date(response.data.data_de_inicio)
            const unix_timestamp = parseInt((today.getTime() / 1000).toFixed(0)) + 86400 * 30 * response.data.duracao
            const pastDate = new Date(unix_timestamp * 1000)
            const formatted = `${pastDate.getFullYear()}-${pastDate.getMonth() + 1}-${pastDate.getDate()}`
            setFormattedDate(formatted)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        loadCurrentPlan()
        // eslint-disable-next-line
    }, [])

    return (
        (plan) ? (
            <Card className="m-0 card-container text-center" style={{ width: '18rem' }} bg="light" text="dark" border="dark" title="Plano básico">
                <CardImage top="true" width="100%" src={planData[plan.number].image} />
                <Card.Body className="mb-3 mt-3">
                    <Card.Title className="font-weight-bold ">{planData[plan.number].name}</Card.Title>
                    <Card.Text className="text-justify">
                        O seu plano começou no dia <span style={{ fontWeight: 'bold' }}>{plan.data_de_inicio.slice(0, 10)}</span> e vai até o dia <span style={{ fontWeight: 'bold' }}>{formattedDate}</span>. O valor atual do seu plano é <span style={{ fontWeight: 'bold' }}>R${planData[plan.number].price}</span>.
                    </Card.Text>
                    <ListGroup className="list-group-flush" variant="dark" text="light ">
                        <ListGroupItem className="mb-2" variant={planData[plan.number].color} text="dark">{planData[plan.number].first}</ListGroupItem>
                        <ListGroupItem className="mb-2" variant={planData[plan.number].color} text="dark">{planData[plan.number].second}</ListGroupItem>
                        <ListGroupItem className="mb-2" variant={planData[plan.number].color} text="dark">{planData[plan.number].third}</ListGroupItem>
                    </ListGroup>
                    <Button className="mb-3 mt-3" variant="primary">
                        <NavLink className="text-light" href="/user/plan/add">{planData[plan.number].message}</NavLink>
                    </Button>
                </Card.Body>
            </Card>
        ) : (
                <div className="d-flex justify-content-center my-5 py-5" >
                    <Spinner type="bars" width={'32px'} height={'32px'} color={'red'} />
                </div>
            )
    )
}
