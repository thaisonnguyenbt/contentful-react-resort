import React from 'react';
import "./App.css";
import Home from './pages/Home'
import Room from './pages/Room'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

export default function App() {
    return (
        <div>
            <Home></Home>
            <Room></Room>
            <SingleRoom></SingleRoom>
            <Error></Error>
        </div>
    )
}
