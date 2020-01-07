import React, { Component } from 'react'
import { RoomContext } from '../Context'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const value = this.context;
        console.log(value);

        const { FeaturedRooms : rooms } = this.context;
        console.log(rooms)
        return <div>Hello from featured rooms </div>
    }
}
