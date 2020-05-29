import React from 'react'

import Card from 'react-bootstrap/Card'
import CardImage from 'react-bootstrap/CardImg'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'

export default function CardManager({ history, title, img, description, create, look, routeCreate, routeLook }) {
    return (
        <Card className="w-auto mr-5 mb-5">
            <Card.Body className="mb-3 mt-3">
                <CardImage top="true" style={{ width: '100px' }} src={img} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <span style={{ textTransform: 'capitalize' }}>{description}</span>
                </Card.Text>
                <ListGroup className="list-group-flush" variant="dark" text="light">
                    <ListGroupItem className="d-flex flex-column" variant="light" text="dark">
                        <div className="d-flex justify-content-center">
                            <Button className="mt-3" variant="outline-success" type="button" onClick={() => history.push(routeCreate)}>
                                {create}
                            </Button>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex flex-column" variant="light" text="dark">
                        <div className="d-flex justify-content-center">
                            <Button className="mt-3" variant="outline-info" type="button" onClick={() => history.push(routeLook)}>
                                {look}
                            </Button>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}