import React from 'react'

import UserTemplate from '../../templates/UserTemplate'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import NavLink from 'react-bootstrap/NavLink'


export default function Upgrade({ history }) {
    return (
        <div>
            {
                !localStorage.getItem('cpf') || !localStorage.getItem('coidse') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>

                            <div className="w-100 d-flex flex-column justify-content-center align-content-center">
                                <h2 className="text-center mb-5">Seus próximos trabalhos</h2>
                                <div className="d-flex">
                                    <Card>
                                        <Card.Body className="mb-3 mt-3">
                                            <Card.Title>Titulo</Card.Title>
                                            <Card.Text>
        
                                            </Card.Text>
                                            <ListGroup className="list-group-flush" variant="dark" text="light ">
                                                <ListGroupItem className="mb-2" variant="light" text="dark">one</ListGroupItem>
                                                <ListGroupItem className="mb-2" variant="light" text="dark">two</ListGroupItem>
                                                <ListGroupItem className="mb-2" variant="light" text="dark">three</ListGroupItem>
                                            </ListGroup>
                                            <Button className="mb-3 mt-3" variant="primary">
                                                <NavLink className="text-light" href="/signup">hello</NavLink>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                    <p></p>
                                </div>

                            </div>

                        </UserTemplate>
                    )
            }
        </div>
    )
}
