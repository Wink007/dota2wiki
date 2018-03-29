import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';


export default class HeroTalents extends Component {
    render () {
        const { talants } = this.props;

        return (
            <div className="talents-container">
                <h3>Древо талантов</h3>
                <ul className="talents">
                    {
                        talants.map((talant, idx) => (
                            <div key={idx} className="effects">
                                {
                                    Object.keys(talant).map((objectKey, index) => {
                                        let value = talant[objectKey];
                                        return value.map((item, index) => (
                                            <li className="wrapper" key={index}>
                                                <span className="talent left-talent">{item.lside}</span>
                                                <span className="level">{item.level}</span>
                                                <span className="talent right-talent">{item.rside}</span>
                                            </li>
                                        ))
                                    })
                                }
                            </div>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

HeroTalents.propTypes = {
    talants: PropTypes.array.isRequired,
};