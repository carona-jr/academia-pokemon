import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import UserTemplate from '~/templates/UserTemplate'
import Button from 'react-bootstrap/Button'

import AlertMessage from '~/components/PopUp/Alert'

import { api } from '~/services/api'

import './Admin.css'

export default function Admin({ history }) {
    const [query, setQuery] = useState({})
    const [queryHistory, setQueryHistory] = useState(JSON.parse(localStorage.getItem('queryHistory')) || ['As suas últimas consultas'])
    const [result, setResult] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    let Key = 0

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await api.post('/admin', {
                query: query.value
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('cpf')
                }
            })
            if (!queryHistory.includes(query.value)) {
                setQueryHistory([...queryHistory, query.value])
                localStorage.setItem('queryHistory', JSON.stringify(queryHistory))
            }
            setResult(response.data)
            setShowSuccess(true)
        } catch (e) {
            setShowError(true)
        }
    }

    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('mhaighstir') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>

                            <AlertMessage show={showSuccess} setShow={setShowSuccess}
                                title="Sucesso"
                                msg={'Consulta realizada com sucesso'}
                                button="Fechar"
                                func={() => {
                                    setShowSuccess(false)
                                }}
                                colorAlert="success"
                                colorButton="outline-success"
                            />

                            <AlertMessage show={showError} setShow={setShowError}
                                title="Erro"
                                msg={'Erro na consulta'}
                                button="Fechar"
                                func={() => setShowError(false)}
                                colorAlert="danger"
                                colorButton="outline-danger"
                            />

                            <div className="w-100 d-flex flex-column">
                                <h2 className="text-center mb-2">Suas consultas personalizadas</h2>
                                <p className="text-center mt-0 mb-5">Faça consultas diretamente no banco PostgreSQL</p>
                            </div>


                            <div className="w-100 d-flex flex-column justify-content-center">
                                <Form
                                    className="d-flex justify-content-around align-items-center"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="d-flex flex-column w-75 m-0">
                                        <Form.Group controlId="query">
                                            <Form.Control
                                                as="textarea" onChange={e => setQuery({ value: e.target.value })}
                                                type="text" placeholder="Insira sua consulta" value={query.value || ''} required />
                                        </Form.Group>

                                        <Form.Group className="w-75 m-0 align-self-end mt-3" controlId="select">
                                            <Form.Control
                                                as="select"
                                                onChange={e => {
                                                    setQuery({ value: e.target.value })
                                                }}
                                                defaultValue="As suas últimas consultas"
                                            >
                                                {
                                                    queryHistory.map(item => {
                                                        return (
                                                            <option key={item} value={item}>{item}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Control>
                                        </Form.Group>
                                    </div>

                                    <div className="m-0">
                                        <Button className="p-3" variant="dark" type="submit">
                                            Enviar
                                        </Button>
                                    </div>
                                </Form>
                            </div>


                            {
                                result && result.length > 0 ? (
                                    <div className="w-80 my-5">
                                        {
                                            result.map(arr => {
                                                return (
                                                    <Table className="w-80 my-5" size="sm" responsive striped bordered hover key={Key++}>
                                                        <thead>
                                                            <tr>
                                                                {
                                                                    arr[0].map(name => {
                                                                        return (
                                                                            <th style={{ verticalAlign: 'middle', textAlign: 'center' }} key={Key++}>{name}</th>
                                                                        )
                                                                    })
                                                                }
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {
                                                                arr[1].map(row => {
                                                                    return (
                                                                        <tr key={Key++}>
                                                                            {
                                                                                arr[0].map(column => {
                                                                                    return (
                                                                                        <td style={{ verticalAlign: 'middle', textAlign: 'center', fontWeight: 'normal' }} key={Key++}>{row[column]}</td>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </tr>
                                                                    )
                                                                })
                                                            }

                                                        </tbody>

                                                    </Table>
                                                )

                                            })
                                        }
                                    </div>
                                ) : (result && result[0][0].length === 0) ? (
                                    <p className="text-center mt-5">Nenhuma tabela foi retornada</p>
                                ) : (
                                            <></>
                                        )
                            }

                        </UserTemplate>
                    )
            }
        </div>

    )

}

// class FlavorForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coco'};
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {    this.setState({value: event.target.value});  }
//     handleSubmit(event) {
//       alert('Seu sabor favorito é: ' + this.state.value);
//       event.preventDefault();
//     }

//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Escolha seu sabor favorito:
//             <select value={this.state.value} onChange={this.handleChange}>            
//               <option value="laranja">Laranja</option>
//               <option value="limao">Limão</option>
//               <option value="coco">Coco</option>
//               <option value="manga">Manga</option>
//             </select>
//           </label>
//           <input type="submit" value="Enviar" />
//         </form>
//       );
//     }
//   }