import React, { Component } from 'react'

import './Slide.css'

class Slide extends Component {
    constructor(){
        super();

        this.timer = '';
    }

    state = {
        data: [
            {
                title: 'Terminator',
                color: 'red'
            },
            {
                title: ' The Hangover',
                color: 'yellow'
            },
            {
                title: 'The Conjuring',
                color: 'black'
            }
        ]
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.goToNextSlide();
        }, 10000);
    }

    componentDidUpdate(){
        clearInterval(this.timer);

        this.timer = setInterval(()=>{
            return this.props.goToNextSlide()
        }, 10000)
    }

    render() {
        const {activeIndex, prevSlide, opposite} = this.props;
        return (
            <div className="items">
                {
                    this.state.data.map((movie, index) => {
                        return (
                            <div
                                className={
                                    `${index === activeIndex ? 'currentSlide' : index === prevSlide ? 'pastSlide' : 'slide'} ${opposite ? 'opposite' : ''}`}
                                key={index}>
                                <div className={movie.color}>
                                    <h1>{movie.title}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Slide