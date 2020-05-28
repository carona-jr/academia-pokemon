import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

import AlertMessage from '../../components/PopUp/Alert'

import { api } from '../../services/api'

import UserTemplate from '../../templates/UserTemplate'

import { planData } from '../../utils/planData'

function PriceCard({ title, lcolor, first, second, third, price }) {
    return (
        <div>
            <p>{title} - R${price}</p>
            <ListGroup className="list-group-flush" variant="dark" text="light ">
                <ListGroupItem className="mb-2" variant={lcolor} text="dark">{first}</ListGroupItem>
                <ListGroupItem className="mb-2" variant={lcolor} text="dark">{second}</ListGroupItem>
                <ListGroupItem className="mb-2" variant={lcolor} text="dark">{third}</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default function AddPlan({ history }) {
    const [plan, setPlan] = useState({})
    const [show, setShow] = useState(false)
    const now = new Date()

    async function handleSubmit(e) {
        e.preventDefault()
        const userCpf = localStorage.getItem('cpf')
        try {
            await api.patch('/user/payment', {
                num_cartao: plan.num_cartao,
                data_vencimento: plan.data_vencimento,
                nome_cartao: plan.nome_cartao,
                cod_cartao: plan.cod_cartao
            }, {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })
        } catch (e) {
            setShow(true)
        }

        try {
            await api.patch('/plano', {
                codigo_plano: planData[parseInt(plan.plano)].value,
                valor: planData[parseInt(plan.plano)].price,
                data_de_inicio: now,
                duracao: planData[parseInt(plan.plano)].duration,
            }, {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })
            history.push('/user/plan')
        } catch (e) {
            setShow(false)
        }
    }

    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <h2 className="text-center mb-5">Assine um plano</h2>
                            <AlertMessage show={show} setShow={setShow}
                                title="Ops, parece que aconteceu uma coisa inesperada."
                                msg="Confirme no botão antes de deletar a sua conta ou aperte o X para voltar :("
                                button="Voltar"
                                func={() => setShow(false)}
                                colorAlert="danger"
                                colorButton="outline-danger"
                            />

                            <Form>
                                <Form.Group as={Row} controlId="num_cartao">
                                    <Form.Label column sm={2}>
                                        Número do cartão
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="number" placeholder="0123456789" onChange={e => setPlan({ ...plan, num_cartao: e.target.value })} required />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="nomeCartao">
                                    <Form.Label column sm={2}>
                                        Nome do cartão
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Seu Nome" onChange={e => setPlan({ ...plan, nome_cartao: e.target.value })} required />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="nomeCartao">
                                    <Form.Label column sm={2}>
                                        Data de vencimento
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="month" placeholder="10/2020" onChange={e => setPlan({ ...plan, data_vencimento: e.target.value })} required />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="codigoCartao">
                                    <Form.Label column sm={2}>
                                        Código do cartão
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="number" placeholder="1025115" onChange={e => setPlan({ ...plan, cod_cartao: e.target.value })} required />
                                    </Col>
                                </Form.Group>
                                <fieldset>
                                    <Form.Group as={Row} >
                                        <Form.Label as="legend" column sm={2}>
                                            Escolha o plano
                                        </Form.Label>
                                        <Row sm={10}>
                                            {
                                                planData.map(item => {
                                                    return (!item.basic) ? (
                                                        <Form.Check
                                                            key={item.value}
                                                            className="mx-4"
                                                            type="radio"
                                                            label={
                                                                <PriceCard
                                                                    title={item.name}
                                                                    price={item.price}
                                                                    lcolor={item.color}
                                                                    first={item.first}
                                                                    second={item.second}
                                                                    third={item.third}
                                                                />
                                                            }
                                                            name="radio"
                                                            id={item.value}
                                                            value={item.value}
                                                            onChange={e => setPlan({ ...plan, plano: e.target.value })}
                                                        />
                                                    ) : (
                                                            <div key={item.value}></div>
                                                        )
                                                })
                                            }
                                        </Row>
                                    </Form.Group>
                                </fieldset>
                                <Form.Group className="d-flex justify-content-center">
                                    <Button className="mr-3 px-5 py-2" variant="danger" type="button" onClick={() => history.push('/user/plan')}>Voltar</Button>
                                    <Button className="px-5 py-2" variant="success" type="submit" onClick={handleSubmit}>Assinar</Button>
                                </Form.Group>
                            </Form>

                        </UserTemplate>
                    )
            }
        </div>
    )
}