import React, { Component } from 'react'

import LeftArrow from '../LeftArrow/LeftArrow'
import RightArrow from '../RightArrow/RightArrow'
import './Slide.css'

class Slide extends Component {
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
        setInterval(()=>{
            return this.props.goToNextSlide()
        }, 5000)
    }

    render() {
        return (
            <section>
                {
                    this.state.data.map((movie, index) => {
                        return (
                            <div
                                className={index === this.props.activeIndex ? 'active' : 'inactive'}
                                key={index}>
                                <div className={movie.color}>
                                    <LeftArrow
                                        goToPrevSlide={() => this.props.goToPrevSlide()} />
                                    <h1>{movie.title}</h1>
                                    <RightArrow
                                        goToNextSlide={() => this.props.goToNextSlide()} />
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        )
    }
}

export default Slide