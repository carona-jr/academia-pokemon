import React from 'react'

import LoginNav from '../components/LoginHeader'

import './About.css'

export default function About() {
    return (
        <div className="container-about d-flex justify-content-center align-items-center">
            <LoginNav />
            <div className="container-txt p-5 rounded shadow">
                <h2 className="text-center display-5 mb-5">Academia Pokémon</h2>
                <p>O projeto é um trabalho da disciplina de banco de dados I a fim de explorar os conceitos aprendidos em sala de aula sobre com a linguagem SQL. </p>
                <p>Este trabalho tem como objetivo o desenvolvimento do banco de dados e uma interface gráfica para visualização dos dados contidos neste banco.</p>
                <p>Tecnologias utilizadas:</p>
                <ol>NodeJS</ol>
                <ol>ElephantSQL</ol>
                <ol>ReactJS</ol>
                <p>Desenvolvido por: Carlos, Giovanna, Lucas e Leandro.</p>
            </div>
        </div>
    )
}
