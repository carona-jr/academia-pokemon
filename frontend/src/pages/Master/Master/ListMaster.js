import React, { useState, useEffect } from 'react'

import List from '~/components/Lists/List'

import Form from 'react-bootstrap/Form'
import { Pagination } from 'react-bootstrap'

import { api } from '~/services/api'
import AlertMessage from '~/components/PopUp/Alert'

import UserTemplate from '~/templates/UserTemplate'

export default function ListMaster({ history }) {
    const [active, setActive] = useState(1)
    const [past, setPast] = useState(1)
    const [future, setFuture] = useState(1)
    const [count, setCount] = useState()
    const [numTrainer, setNumTrainer] = useState('??')

    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const [sort, setSort] = useState({ sortBy: ['nome', 'asc'], limit: 1, table: 'u' })

    async function loadCount() {
        const userCpf = localStorage.getItem('cpf')
        try {
            const response = await api.get('mestre/all', {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })

            if (response.data.count === '0') {
                setNumTrainer(0)
                return setCount(0)
            }
            setNumTrainer(response.data.count)

            const number = parseInt(response.data.count)

            if (number % 10 === 0)
                return setCount(Math.trunc(number / 10))

            setCount(Math.trunc(number / 10 + 1))
        } catch (e) {
            alert(e)
        }
    }

    let items = []
    for (let number = past; number <= future; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={(e) => handleClick(e, number)}>
                {number}
            </Pagination.Item>
        )
    }

    function handleClick(e, number) {
        setSort({ ...sort, limit: number })
        setActive(number)
        if (number === 1) {
            setPast(1)
            if (count === 1)
                return setFuture(1)
            setFuture(number + 1)
            return
        }

        if (number === count) {
            setPast(count - 1)
            setFuture(count)
            return
        }

        if (active < number) {
            setPast(past)
            setFuture(future + 1)
        } else {
            setPast(past - 1)
            setFuture(future - 1)
        }
    }

    useEffect(() => {
        loadCount()
        // eslint-disable-next-line
    }, [active, sort])

    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir') ? (
                    history.push('/')
                ) : count !== 0 ? (
                    <UserTemplate history={history}>
                        <div className="w-100 d-flex flex-column mb-5">
                            <h2 className="text-center">Mestres da Academia</h2>
                            <p className="text-center mt-0 mb-5">A academina possui {numTrainer} mestres</p>
                        </div>
                        <AlertMessage show={show} setShow={setShow}
                            title="Sucesso"
                            msg="O treinador foi deletado com sucesso, recarregue a página :)"
                            button="Recarregar"
                            func={() => {
                                setShow(false)
                                return window.location.reload(true)
                            }}
                            colorAlert="success"
                            colorButton="outline-success"
                        />
                        <AlertMessage show={show2} setShow={setShow2}
                            title="Erro"
                            msg="O treinador não foi deletado com sucesso :)"
                            button="Fechar"
                            func={() => setShow(false)}
                            colorAlert="danger"
                            colorButton="outline-danger"
                        />
                        <div className="d-flex flex-column flex-wrap justify-content-center">
                            <Form className="d-flex flex-column flex-lg-row">
                                <Form.Group controlId="formGridState" className="d-flex flex-row">
                                    <Form.Label className="w-100 w-lg-75 align-self-center">Ordenar por:</Form.Label>
                                    <Form.Control as="select" value={sort.sortSearch} onChange={e => {
                                        if (e.target.value === 'nome' || e.target.value === 'cpf' || e.target.value === 'data_cadastro')
                                            return setSort({ ...sort, sortBy: [e.target.value, sort.sortBy[1]], table: 'u' })
                                        setSort({ ...sort, sortBy: [e.target.value, sort.sortBy[1]], table: 't' })
                                    }}>
                                        <option value="nome">Nome</option>
                                        <option value="cpf">CPF</option>
                                        <option value="data_cadastro">Data de cadastro</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="d-flex flex-row justify-content-center align-content-center">
                                    <Form.Label as="legend" column>
                                        De forma:
                                    </Form.Label>
                                    <Form.Check
                                        className="align-self-center mr-2"
                                        type="radio"
                                        label="Crescente"
                                        name="formOrganizacao"
                                        id="formOrganizacao1"
                                        onChange={e => setSort({ ...sort, sortBy: [sort.sortBy[0], 'asc'] })}
                                    />
                                    <Form.Check
                                        className="align-self-center"
                                        type="radio"
                                        label="Decrescente"
                                        name="formOrganizacao"
                                        id="formHorizontalRadios2"
                                        onChange={e => setSort({ ...sort, sortBy: [sort.sortBy[0], 'desc'] })}
                                    />
                                </Form.Group>
                            </Form>
                            <List
                                names={['nome', 'cpf', 'data_cadastro']}
                                titles={['Nome', 'CPF', 'Promovido em', '#']}
                                routeGet="/mestre/all"
                                routeDelete="/mestre"
                                sort={sort}
                                date={['data_cadastro']}
                                canEdit={false}
                                pkey={['cpf']}
                            />
                            <Pagination className="justify-content-center mt-3">
                                <Pagination.First onClick={(e) => handleClick(e, 1)} />
                                <Pagination.Prev
                                    onClick={(e) => {
                                        if (active === 1)
                                            return handleClick(e, 1)
                                        let number = active
                                        return handleClick(e, --number)
                                    }}
                                />
                                {
                                    (active !== 1) ? (
                                        <Pagination.Ellipsis />
                                    ) : (
                                            <></>
                                        )
                                }
                                {items}
                                {
                                    (active !== count) ? (
                                        <Pagination.Ellipsis />
                                    ) : (
                                            <></>
                                        )
                                }
                                <Pagination.Next
                                    onClick={(e) => {
                                        if (active === count)
                                            return handleClick(e, active)
                                        let number = active
                                        return handleClick(e, ++number)
                                    }}
                                />
                                <Pagination.Last onClick={(e) => handleClick(e, count)} />
                            </Pagination>
                        </div>
                    </UserTemplate>
                ) : (
                            <UserTemplate history={history}>
                                <h6>Não existem mestres cadastrados!</h6>
                            </UserTemplate>
                        )
            }
        </div>
    )
}
