import React, { useRef, useState, useEffect } from 'react'

import { Pagination } from 'react-bootstrap'
import Spinner from 'react-loading'
import Container from 'react-bootstrap/Container'

import { api } from '../../services/api'

import Header from '../../components/Nav/Header'
import SideNav from '../../components/Nav/SideNav'
import PokemonList from '../../components/Pokemon/PokemonList'

export default function MyPokemons({ history }) {
    const divMain = useRef()
    const [user] = useState(JSON.parse(localStorage.getItem('user')))
    const [active, setActive] = useState(1)
    const [responseData, setResponseData] = useState()
    const [count, setCount] = useState()
    const [sort, setSort] = useState({ sortBy: ['nome', 'asc'], limit: 1 })

    async function loadPokemonCount() {
        const cpf = localStorage.getItem('cpf')
        try {
            const response = await api.get('/pokemon/all', {
                headers: {
                    Authorization: 'Bearer ' + cpf
                }
            })

            if (response.data.count === '0') {
                return setResponseData('empty')
            }

            setCount(Math.trunc(parseInt(response.data.count) / 10 + 1))
        } catch (e) {
            alert(e)
        }
    }
    
    function handleClick(e, number) {
        window.location.reload(true)
        setSort({...sort, limit: number})
    }

    let items = [];
    for (let number = 1; number <= count; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={(e) => handleClick(e, number)}>
                {number}
            </Pagination.Item>,
        )
    }

    useEffect(() => {
        loadPokemonCount()
    }, [])

    return (
        !localStorage.getItem('cpf') ? (
            history.push('/')
        ) : (
                <div>
                    <Header />
                    <div ref={divMain} className="container-user">
                        {
                            (count) ? (
                                <div>
                                    <PokemonList route={`/pokemon/all?sortBy=${sort.sortBy[0]}:${sort.sortBy[1]}&limit=${sort.limit}`} />

                                    <div>
                                    <Pagination>{items}</Pagination>
                                    </div>
                                </div>
                            ) : (responseData === 'empty') ? (
                                <div>
                                    <p>Você não possui nenhum pokémon :(</p>
                                </div>
                            ) : (
                                    <div className="d-flex justify-content-center my-5 py-5" >
                                        <Spinner type="bars" width={'32px'} height={'32px'} color={'green'} />
                                    </div>
                                )
                        }

                    </div>
                    <SideNav divMain={divMain} />
                </div>
            )
    )
}

/**
 * let active = 2;
let items = [];
for (let number = 1; number <= ; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
    <br />

    <Pagination size="lg">{items}</Pagination>
    <br />

    <Pagination size="sm">{items}</Pagination>
  </div>
);

render(paginationBasic);
 */