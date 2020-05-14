import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CardImage from 'react-bootstrap/CardImg'
import NavLink from 'react-bootstrap/NavLink'

import bulbassaur from '../assets/bulbassaur.png'
import charmander from '../assets/charmander.png'
import squirtle from '../assets/squirtle.png'

import './Pricing.css'

import LoginNav from '../components/LoginHeader'

function PriceCard({ title, description, price, image, lcolor, first, second, third }) {
    return (  
        <Card className="card-container" style={{ width: '18rem' }} bg="light" text="dark" border="dark">
            <CardImage top width = "100%" src={image}/>
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
                    <NavLink className="text-light" href="/signUp">Assine já por R$ {price}!</NavLink>
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
                    <PriceCard  
                        title="Plano Bulbassaur"
                        description="O plano essencial necessário para você se iniciar no universo pokémon."
                        price="49,99"
                        image={bulbassaur}
                        lcolor="success"
                        first="Upar até cinco níveis de cada pokémon."
                        second="Treine até cinco pokémons diferentes."
                        third="Cada treinamento dura de 6 a 7 dias."
                        history={history}
                    />
                    <PriceCard  
                        title="Plano Squirtle"
                        description="O plano intermediário para você tornar seus pokémons mais talentosos."
                        price="99,99"
                        image={squirtle}
                        lcolor="primary"
                        first="Upar até quinze níveis de cada pokémon."
                        second="Treine até quinze pokémons diferentes."
                        third="Cada treinamento dura de 3 a 4 dias."
                        history={history}
                    />
                    <PriceCard
                        title="Plano Charmander"
                        description="O plano completo com todos os benefícios para os seus pokémons se tornarem os melhores."
                        price="199,99"
                        image={charmander}
                        lcolor="danger"
                        first="Upar níveis ilimitados de cada pokémon."
                        second="Treine quantos pokémons desejar."
                        third="Cada treinamento dura no máximo 2 dias."
                        history={history}
                    />
                </div>
            </div>
        </div>
    )
}