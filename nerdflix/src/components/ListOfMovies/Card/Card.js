import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';
import './Card.css';

const card = props => {
    const { runningTime, IMDb, buyers, title, movieBuyer, showButton, image } = props;

    const movieDataProvider = (e) => {
        e.preventDefault()
        movieBuyer({
            title,
            IMDb,
            runningTime,
            image,
            buyers,
        })
    };

    let button = showButton ? <Button
clicked={movieDataProvider} >{showButton}</Button> : null;

    return (
        <li className="store-list_item">
            <img src={require(`../../../assets/images/${image}`)} alt={title} />
            <div className='item_div--content'>
                <h4>{title}</h4>
                <p>Running Time: {runningTime} minutes</p>
                <p>IMDb: {IMDb}</p>
                <p>Buyers: {buyers}</p>
            </div>
                {button}
        </li>
    )
};

card.propTypes = {
    runningTime: PropTypes.number.isRequired,
    IMDb: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    buyers: PropTypes.number.isRequired,
};

export default card;