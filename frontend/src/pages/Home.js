

<div ref={divMain} className="container-user">
                                <h2> Bem vindo, <span style={{ textTransform: 'capitalize' }}>{localStorage.getItem('nome')}</span>!</h2>
                                <h5>Seus Pokémons recentes:</h5>
                                <PokemonList />

                            </div>