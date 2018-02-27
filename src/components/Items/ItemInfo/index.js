import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';


export default class ItemInfo extends Component {
    render () {
        const { currentItem } = this.props;
        if(!currentItem) {
            return (
                <div className="info-container">
                    <h3>Информация</h3>
                </div>    
            );            
        } 
        const { title, image, price, add_stats, usage, description, notation } = currentItem;

        return (
            <div className="info-container">
                <h3>Информация</h3>
                <div className="wrapper">
                    <div className="info-head">
                        <img src={image || '' } alt="" className="item-logo" />
                        <div>
                            <p className="title">{title || ''}</p>
                            <p className="price">{price || ''}</p>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about-main">
                            {usage && <p className="use">Использование: <span>{usage || ''}</span></p>}
                            {
                                add_stats && add_stats.map((stat, index) => (
                                    <p className="stats" key={index}>
                                        <span className="value">{stat.value}</span>
                                        <span className="feature">{stat.feature}</span>
                                    </p>
                                ))
                            }
                            {description && <p className="description">{description || ''}</p>}
                        </div>
                        {notation && <p className="notation">{notation || ''}</p>}
                    </div>
                </div>
            </div>
        )
    }
}

ItemInfo.propTypes = {
    currentItem: PropTypes.object,
};