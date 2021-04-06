import "./Flip.css";
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { list } from '../../redux/actions';
import { connect } from 'react-redux';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Flip extends Component {
    getList=()=>{
        fetch('website')
        .then((res)=>res.json())
        .then((res)=>{console.log(res);this.props.list(res.list)})
        .catch((error)=>console.error(error))
    }
    render(){
        return (
            <div className='flip'>
                <Flippy flipOnHover={true} flipDirection="horizontal" ref={(r) => this.flippy = r}>
                    <FrontSide>
                            <img className='flipimg' src={this.props.img.src} alt={this.props.img.name}/>
                    </FrontSide>
                    <Link to='/list'>
                        <BackSide>
                            <div className='flipinfo' onClick={()=>{this.getList(this.props.img.name)}}>{this.props.img.name}</div>
                        </BackSide>
                    </Link>
                </Flippy>
            </div>
        )
    }
}

// Redux

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return { list : (x) => { dispatch ( list (x) ) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flip);
