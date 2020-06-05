import React, { useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form'

import Card from 'react-bootstrap/Card'
import CardImage from 'react-bootstrap/CardImg'

import deleteImg from '~/assets/icons/delete-black-24dp.svg'
import add from '~/assets/icons/playlist_add-black-24dp.svg'
import check from '~/assets/icons/check-black-24dp.svg'
import close from '~/assets/icons/close-black-24dp.svg'

import AlertMessage from '~/components/PopUp/Alert'
import { api } from '~/services/api'

export default function EditTrainer({ routeGet, routeDelete, attribute, cpf }) {
    const [data, setData] = useState()
    const [newData, setNewData] = useState({})
    const [showAdd, setShowAdd] = useState(false)
    const [textShow, setTextShow] = useState()
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    let num = 1

    async function loadData() {
        try {
            const response = await api.get(routeGet, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem(cpf)
                }
            })
            setData(response.data)
        } catch (e) {
        }
    }

    async function handleDelete(e, item) {
        e.preventDefault()

        try {
            await api.delete(routeDelete, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem(cpf),
                    [attribute]: item
                }
            })
            
            setTextShow('deletado')
            setShowSuccess(true)
        } catch (e) {
            setTextShow('deletado')
            setShowError(true)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await api.post(routeGet, {
                [attribute]: newData[attribute]
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem(cpf)
                }
            })
            setTextShow('criado')
            setShowSuccess(true)
        } catch (e) {
            setTextShow('criado')
            setShowError(true)
        }
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line
    }, [data, textShow, showSuccess])

    return (
        <div className="w-100 mt-5">
            <div className="w-100 d-flex flex-row align-items-center mb-5">
                <div>
                    <h3 className="mr-3"><span style={{ textTransform: 'capitalize' }}>{attribute}s</span></h3>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <img className="hover-cursor mr-3" src={add} style={{ width: '32px' }} alt="novo" onClick={() => setShowAdd(true)} />
                    {
                        showAdd ? (
                            <div className="d-flex flex-row align-items-center">
                                <div className="mr-3">
                                    <Form>
                                        <Form.Group className="m-0" controlId={attribute}>
                                            <Form.Control
                                                onChange={e => setNewData({ ...newData, [attribute]: e.target.value })}
                                                type="text" placeholder={attribute} value={newData[attribute] || ''} required />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div>
                                    <img className="hover-cursor mr-3" src={check} style={{ width: '32px' }} alt="novo" onClick={handleSubmit} />
                                </div>
                                <div>
                                    <img className="hover-cursor mr-3" src={close} style={{ width: '32px' }} alt="fechar" onClick={() => setShowAdd(false)} />
                                </div>


                            </div>
                        ) : (
                                <></>
                            )
                    }
                </div>
            </div>

            <AlertMessage show={showSuccess} setShow={setShowSuccess}
                title="Sucesso"
                msg={`Sua ${attribute} foi ${textShow} com sucesso :)`}
                button="Fechar"
                func={() => { setShowSuccess(false) }}
                colorAlert="success"
                colorButton="outline-success"
            />
            <AlertMessage show={showError} setShow={setShowError}
                title="Erro"
                msg={`Sua ${attribute} não foi ${textShow} com sucesso :(`}
                button="Fechar"
                func={() => setShowError(false)}
                colorAlert="danger"
                colorButton="outline-danger"
            />

            <div className="d-flex flex-row flex-wrap justify-content-center">
                {
                    data ? (
                        data.map(item => {
                            return (
                                <Card key={num} className="w-auto mr-5 mb-5">
                                    <Card.Body className="mb-3 mt-3">
                                        <Card.Title><span style={{ textTransform: 'capitalize' }}>{attribute}</span> {num++}</Card.Title>
                                        <div className="d-flex flex-row justify-content-around align-items-center mt-4">
                                            <div>
                                                <Card.Text style={{ lineHeight: '32px' }}>
                                                    <span style={{ textTransform: 'capitalize' }}>{item[attribute]}</span>
                                                </Card.Text>

                                            </div>
                                            <div>
                                                <CardImage className="hover-cursor" src={deleteImg} style={{ width: '24px' }} alt="abrir" onClick={(e) => handleDelete(e, item[attribute])} />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    ) : (
                            <p>Este treinador não possuí {attribute} para edição :(</p>
                        )
                }
            </div>
        </div>
    )
}