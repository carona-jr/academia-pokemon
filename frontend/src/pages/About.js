import React from 'react'

import LoginNav from '../components/LoginHeader'

<<<<<<< HEAD
=======
import img from '../assets/images/bd.png'
>>>>>>> 3171f6538b6f4e5acddd125a81a292bdc32bac3c

import './About.css'

export default function Main() {
    return (
<<<<<<< HEAD
        <div>
            {
                    <div className="container-maintxt d-flex justify-content-center align-items-center">
                        <LoginNav />                
                            <div className=" container-txt p-5 rounded shadow">
                                    <h2 className="text-center display-5 mb-5">Academia Pokémon</h2>
                                    <p>O projeto é um trabalho da disciplina de banco de dados I a fim de explorar os conceitos aprendidos em sala de aula sobre com a linguagem SQL. </p>
                                    <p>Este trabalho tem como objetivo o desenvolvimento do banco de dados e uma interface gráfica para visualização dos dados contidos neste banco.</p>
                                    <p>Tecnologias utilizadas:</p>
                                    <ol>NodeJS</ol>
                                    <ol>PostgreSQL</ol>
                                    <ol>ReactJS</ol>
                                    <p>Desenvolvido por: Carlos, Giovanna, Lucas e Leandro.</p>
                            </div>   
                    </div>
            }
=======
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
>>>>>>> 3171f6538b6f4e5acddd125a81a292bdc32bac3c
        </div>
    )
}