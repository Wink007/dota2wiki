import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';


export default class HeroMoreInfo extends Component {
    render () {
        const { attack, deffence, biography, characteristic, mobility, stats, imgStr, imgAgil, imgInt} = this.props;

        return (
            <div className="more-info">
                <div className="stats">
                    <div className="attack block">
                        <h3>Атака</h3>
                        {
                            attack.map((attack, index) => (
                                <div key={index}>
                                    <p>
                                        <span>Урон: </span>
                                        <span>{attack.damage || ''}</span>
                                    </p>
                                    <p>
                                        <span>Скор.атаки: </span>
                                        <span>{attack.a_speed || ''}</span>
                                    </p>
                                    <p>
                                        <span>Дальн.атаки: </span>
                                        <span>{attack.a_range || ''}</span>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="def block">
                        <h3>Защита</h3>
                        {
                            deffence.map((deffence, index) => (
                                <div key={index}>
                                    <p>
                                        <span>Броня: </span>
                                        <span>{deffence.armor || ''}</span>
                                    </p>
                                    <p>
                                        <span>Сопрот.магии: </span>
                                        <span>{deffence.m_resist || ''}</span>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="mobility block">
                        <h3>Мобильность</h3>
                        {
                            mobility.map((mobility, index) => (
                                <div key={index}>
                                    <p>
                                        <span>Скор.передв.: </span>
                                        <span>{mobility.speed || ''}</span>
                                    </p>
                                    <p>
                                        <span>Обзор (день): </span>
                                        <span>{mobility.vision_day || ''}</span>
                                    </p>
                                    <p>
                                        <span>Обзор (ночь): </span>
                                        <span>{mobility.vision_night || ''}</span>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="characteristics">
                    {
                        stats.map((stat, idx) => (
                            <div key={idx} className="characteristics-wrapper">
                                <div className={characteristic === 'Strength' ? 'char str' : 'char'}>
                                    <img src={imgStr} alt=""/>
                                    <p>{stat.strength}</p>
                                    <p>за уровень</p>
                                </div>
                                <div className={characteristic === 'Agility' ? 'char agility' : 'char'}>
                                    <img src={imgAgil} alt=""/>
                                    <p>{stat.agility}</p>
                                    <p>за уровень</p>
                                </div>
                                <div className={characteristic === 'Intelligence' ? 'char int' : 'char'}>
                                    <img src={imgInt} alt=""/>
                                    <p>{stat.intelligence}</p>
                                    <p>за уровень</p>
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