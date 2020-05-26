import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CardImage from 'react-bootstrap/CardImg'
import NavLink from 'react-bootstrap/NavLink'

import { planData } from '../../utils/planData'

import './Pricing.css'

import LoginNav from '../../components/Nav/LoginHeader'

function PriceCard({ title, description, price, image, lcolor, first, second, third }) {
    return (
        <Card className="card-container" style={{ width: '18rem' }} bg="light" text="dark" border="dark">
            <CardImage top="true" width="100%" src={image} />
            <Card.Body className="mb-3 mt-3">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <ListGroup className="list-group-flush" variant="dark" text="light ">
                    <ListGroupItem className="mb-2" variant={lcolor} text="dark">{first}</ListGroupItem>
                    <ListGroupItem className="mb-2" variant={lcolor} text="dark">{second}</ListGroupItem>
                    <ListGroupItem className="mb-2" variant={lcolor} text="dark">{third}</ListGroupItem>
                </ListGroup>
                <Button className="mb-3 mt-3" variant="primary">
                    <NavLink className="text-light" href="/signup">{price}</NavLink>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default function Pricing({ history }) {
    return (
        <div className="container-pricing ">
            <LoginNav />
            <div className="mt-5 p-5">
                <h1 className="text-center mb-5 display-5 text-uppercase">Conheça nossos planos!</h1>
                <div className="cardFlex">
                    {
                        planData.map(value => {
                            return (
                                <PriceCard
                                    title={value.name}
                                    description={value.description}
                                    price={value.priceMessage}
                                    image={value.image}
                                    lcolor={value.color}
                                    first={value.first}
                                    second={value.second}
                                    third={value.third}
                                    history={history}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}