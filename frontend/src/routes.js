import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import User from './pages/User'
import Main from './pages/Main'
import About from './pages/About'
import Pricing from './pages/Pricing'
import SignUp from './pages/SignUp'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/user" component={User} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/pricing" component={Pricing} />
        </BrowserRouter>
    )
}