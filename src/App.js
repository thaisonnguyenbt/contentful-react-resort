import React from 'react';
import { Route, Switch } from 'react-router-dom'
import "./App.css";
import Home from './pages/Home'
import Room from './pages/Room'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

import Navbar from './components/Navbar'

export default function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms/" component={Room} />
                <Route exact path="/rooms/:slug" component={SingleRoom} />
                <Route component={Error} />
            </Switch>
        </>
    )
}
