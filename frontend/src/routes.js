import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import User from './pages/Home/User'
import NewPokemon from './pages/Home/NewPokemon'
import MyPokemons from './pages/Home/MyPokemons'
import MyProfile from './pages/Home/MyProfile'
import MyPlan from './pages/Home/MyPlan'
import AddPlan from './pages/Home/AddPlan'
import EditProfile from './pages/Home/EditProfile'
import EditPokemon from './pages/Home/EditPokemon'
import SearchPage from './pages/Home/SearchPage'
import Login from './pages/NoAuth/Login'
import About from './pages/NoAuth/About'
import Pricing from './pages/NoAuth/Pricing'
import SignUp from './pages/NoAuth/SignUp'
import NotFound from './pages/NotFound'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/user" exact component={User} />
                <Route path="/user/profile" exact component={MyProfile} />
                <Route path="/user/plan" exact component={MyPlan} />
                <Route path="/user/plan/add" component={AddPlan} />
                <Route path="/user/profile/edit" exact component={EditProfile} />
                <Route path="/user/pokemon/new" component={NewPokemon} />
                <Route path="/user/pokemon/mine" component={MyPokemons} />
                <Route path="/user/pokemon/edit" component={EditPokemon} />
                <Route path="/user/search" component={SearchPage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/about" component={About} />
                <Route path="/pricing" component={Pricing} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}