import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';


export default class HeroMoreInfo extends Component {
    render () {
        const { biography, characteristic, stats, imgStr, imgAgil, imgInt} = this.props;

        return (
            <div className="more-info">
                <div className="stats">
                    <div className="attack block">
                        <h3>Атака</h3>
                        <p>
                            <span>Урон: </span>
                            <span>55-65</span>
                        </p>
                        <p>
                            <span>Скор.атаки: </span>
                            <span>1.7</span>
                        </p>
                        <p>
                            <span>Дальн.атаки: </span>
                            <span>150</span>
                        </p>
                    </div>
                    <div className="def block">
                        <h3>Защита</h3>
                        <p>
                            <span>Броня: </span>
                            <span>1.8</span>
                        </p>
                        <p>
                            <span>Сопрот.магии: </span>
                            <span>25%</span>
                        </p>
                    </div>
                    <div className="mobility block">
                        <h3>Мобильность</h3>
                        <p>
                            <span>Скор.передв.: </span>
                            <span>310</span>
                        </p>
                        <p>
                            <span>Обзор (день): </span>
                            <span>1,800</span>
                        </p>
                        <p>
                            <span>Обзор (ночь): </span>
                            <span>800</span>
                        </p>
                    </div>
                </div>
                <div className="characteristics">
                    {
                        stats.map((stat, idx) => (
                            <div key={idx} className="characteristics-wrapper">
                                <div className={characteristic === 'Strength' ? 'char str' : 'char'}>
                                    <img src={imgStr} alt=""/>
                                    <p>{stat.strength}</p>
                                </div>
                                <div className={characteristic === 'Agility' ? 'char agility' : 'char'}>
                                    <img src={imgAgil} alt=""/>
                                    <p>{stat.agility}</p>
                                </div>
                                <div className={characteristic === 'Intelligence' ? 'char int' : 'char'}>
                                    <img src={imgInt} alt=""/>
                                    <p>{stat.intelligence}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="bio">
                    <h2>Биография</h2>
                    <span>
                        {biography}
                    </span>
                </div>
            </div>
        )
    }
}

HeroMoreInfo.propTypes = {
    biography: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
    imgStr: PropTypes.string.isRequired,
    imgAgil: PropTypes.string.isRequired,
    imgInt: PropTypes.string.isRequired,
    // hideSkill: PropTypes.func.isRequired,
    // about: PropTypes.string.isRequired,
    // hp: PropTypes.array.isRequired,
    // mp: PropTypes.array.isRequired,
    // image: PropTypes.string.isRequired, 
    // name: PropTypes.string.isRequired,
    // skills: PropTypes.array.isRequired,
};