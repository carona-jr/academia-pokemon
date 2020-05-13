import React from 'react'

import LoginNav from '../components/LoginHeader'

import img from '../assets/images/bd.png'

export default function About() {
    return (
        <div className="container-about" >
            <LoginNav />
            <div className="mt-5 pt-5 d-flex justify-content-center align-items-center flex-column">
                <div className="mb-5">
                    <h1>Sobre nós</h1>
                </div>
                <div className="p-5 bg-light">
                    <h2 className="text-center display-5 mb-5">Trabalho de Banco de Dados</h2>
                    <p>O projeto é um trabalho da disciplina de banco de dados I a fim de explorar os conceitos aprendidos em sala de aula com a linguagem SQL. </p>
                    <p>Este trabalho tem como objetivo o desenvolvimento do banco de dados e uma interface gráfica para visualização dos dados contidos neste banco.</p>
                    <h5 className="display-5 mb-5 mt-4" >Diagrama modelo entidade</h5>
                    <img className="w-100 h-auto" src={img} />
                </div>
            </div>
        </div>
    )
}