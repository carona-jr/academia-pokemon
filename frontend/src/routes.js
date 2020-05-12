import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import User from './pages/User'
import Main from './pages/Main'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main}/>
            <Route path="/user" component={User}/>
        </BrowserRouter>
    )
}