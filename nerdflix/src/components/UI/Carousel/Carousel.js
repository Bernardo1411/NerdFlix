import React, { Component } from 'react'

import Slide from './Slide/Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import './Carousel.css'

class Carousel extends Component{
    state = {
        activeIndex: 0,
        length: 3,
        opposite: false,
        prevSlide: 2,
        isClick: true,
    };

    goToNextSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;
        let prevSlide = '';

        if(this.state.isClick){
            if(index === length-1){
              index = 0;
               prevSlide = length-1;
            }
            else{
                index++;
                prevSlide = index - 1;
            }

            this.setState({
            activeIndex: index,
            opposite: false,
            prevSlide,
            isClick: false,
            })

            setTimeout(() => {
                this.setState({
                    isClick: true,
                })
            }, 1500);
        }
    }

    goToPrevSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;
        let prevSlide = '';
        
        if(this.state.isClick){
            if(index < 1){
                index = length - 1;
                prevSlide = 0;
            }
            else{
                index--;
                prevSlide = index + 1;
            }

            this.setState({
                activeIndex: index,
                opposite: true,
                prevSlide,
                isClick: false,
            });

            setTimeout(() => {
                this.setState({
                    isClick: true,
                })
            }, 2000);
        }
    }

    render(){
        return(
            <div className='carousel'>
                <div className='carousel-items'>
                    <LeftArrow
                                        goToPrevSlide={() => this.goToPrevSlide()} />
                    <Slide
                    goToNextSlide={() => this.goToNextSlide()}
                    goToPrevSlide={() => this.goToPrevSlide()} 
                    activeIndex={this.state.activeIndex}
                    prevSlide={this.state.prevSlide}
                    opposite={this.state.opposite}
                    />
                    <RightArrow
                                        goToNextSlide={() => this.goToNextSlide()} />
                </div>
            </div>
        )
    }
}

export default Carousel;