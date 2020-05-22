import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import User from './pages/Home/User'
import NewPokemon from './pages/Home/NewPokemon'
import MyPokemons from './pages/Home/MyPokemons'
import EditPokemon from './pages/Home/EditPokemon'
import SearchPage from './pages/Home/SearchPage'
import Login from './pages/NoAuth/Login'
import About from './pages/NoAuth/About'
import Pricing from './pages/NoAuth/Pricing'
import SignUp from './pages/NoAuth/SignUp'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/user" exact component={User} />
            <Route path="/user/pokemon/new" component={NewPokemon} />
            <Route path="/user/pokemon/mine" component={MyPokemons} />
            <Route path="/user/pokemon/edit" component={EditPokemon} />
            <Route path="/user/search" component={SearchPage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/pricing" component={Pricing} />
        </BrowserRouter>
    )
}