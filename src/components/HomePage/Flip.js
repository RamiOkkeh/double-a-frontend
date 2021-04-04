import "./Flip.css"
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Flip extends Component {
    render(){
        return (
                <div className='flip'>
                    <Flippy flipOnHover={true} flipDirection="horizontal" ref={(r) => this.flippy = r}>
                        <FrontSide>
                                <img src={this.props.img.src} width='100%' height='100%' alt={this.props.img.alt}/>
                        </FrontSide>
                    <Link to='/list'>
                        <BackSide>
                                <div className='flipinfo'>{this.props.img.alt}</div>
                        </BackSide>
                    </Link>
                    </Flippy>
                </div>
        )
    }
}

export default Flip
