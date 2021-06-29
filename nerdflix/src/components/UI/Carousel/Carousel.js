import React, { Component } from 'react'

import Slide from './Slide/Slide'
import './Carousel.css'

class Carousel extends Component{
    state = {
        activeIndex: 0,
        length: 3
    }

    goToNextSlide = () => {
        let index = this.state.activeIndex
        let length = this.state.length

        if(index === length-1){
            index = 0
        }
        else{
            index++
        }

        this.setState({activeIndex: index})
    }

    goToPrevSlide = () => {
        let index = this.state.activeIndex
        let length = this.state.length

        if(index < 1){
            index = length - 1 
        }
        else{
            index--
        }

        this.setState({activeIndex: index})
    }

    render(){
        return(
            <div className='carousel'>
                <div className='carousel-items'>
                    <Slide
                    goToNextSlide={() => this.goToNextSlide()}
                    goToPrevSlide={() => this.goToPrevSlide()} 
                    activeIndex={this.state.activeIndex}/>
                </div>
            </div>
        )
    }
}

export default Carousel