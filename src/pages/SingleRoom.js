import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg"
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from "../components/StyledHero"

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug)
        if (!room) {
            return <div className="error">
                <h3>No Such Room...</h3>
                <Link to="/rooms" className="btn-primary">BACK TO ROOMS</Link>
            </div>
        }

        const {name, 
            description, 
            capacity, 
            size, 
            price,
            extras, 
            breakfast, 
            pets, 
            images} = room;

        return <>
            <StyledHero img={images[0]}>
                <Link to="/rooms" className="btn-primary">
                    Back to rooms
                </Link>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-image">
                    {images.map((item, index) => {
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
            </section>
        </>
    }
}
