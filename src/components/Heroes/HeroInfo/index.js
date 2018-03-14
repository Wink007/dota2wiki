import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SkillsTooltip from '../SkillsTooltip';

import './index.scss';
import imgStr from '../../../../src/image/str.png';
import imgAgil from '../../../../src/image/agility.png';
import imgInt from '../../../../src/image/int.png';


export default class HeroInfo extends Component {
    render () {
        const { currentHero, currentSkill, closeHeroInfo, showSkill, hideSkill } = this.props;
        if(!currentHero) {
            return (
                <div className="hero-info">
                </div>    
            );            
        }
        const { image, hp, mp, stats, name, about, skills } = currentHero;

        return (
            <div className={currentHero ? "hero-info show-hero-info" : "hero-info"}>
                <a onClick={closeHeroInfo(currentHero)} href="" className="close">X</a>
                <div className="about">
                    <div className="img-block">
                        <img className="hero-logo-info" src={image || ''} alt="" />
                        <div className="skills-wrapper">
                            {
                                skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="skills"
                                        onMouseEnter={showSkill(skill)}
                                        onMouseLeave={hideSkill(skill)}
                                    >
                                        <img
                                            className="skill-logo"
                                            src={skill.image}
                                            alt={skill.name}
                                        />
                                    </div>
                                ))
                            }
                            <SkillsTooltip heroName={name} currentSkill={currentSkill} />
                        </div>
                    </div>
                    <div className="info">
                        <p className="name">{name || ''}</p>
                        {
                            hp.map((health, index) => (
                                <p key={index} className="hp">
                                    <span className="health">{health.health}</span>
                                    <span className="health-restore">{health.restore}</span>
                                </p>
                            ))
                        }
                        {
                            mp.map((mana, index) => (
                                <p key={index} className="mp">
                                    <span className="mana">{mana.mana}</span>
                                    <span className="mana-restore">{mana.restore}</span>
                                </p>
                            ))
                        }
                        <div className="characteristics">
                            {
                                stats.map((stat, idx) => (
                                    <div key={idx} className="characteristics-wrapper">
                                        <div className="srt">
                                            <img src={imgStr} alt=""/>
                                            <p>{stat.strength}</p>
                                        </div>
                                        <div className="agility">
                                            <img src={imgAgil} alt=""/>
                                            <p>{stat.agility}</p>
                                        </div>
                                        <div className="int">
                                            <img src={imgInt} alt=""/>
                                            <p>{stat.intelligence}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="stats">
                    <div className="attack">
                        <h3>Аттака</h3>
                        <p className="damage">55-65</p>
                        <p className="attack-rate">1.7</p>
                        <p className="attack-range">150</p>
                    </div>
                    <div className="def">
                        <h3>Защита</h3>
                        <p className="armor">1.8</p>
                        <p className="resist">25%</p>
                    </div>
                    <div className="mobility">
                        <h3>Мобильность</h3>
                        <p className="move-speed">310</p>
                        <p className="vision-rage">1,800/800</p>
                    </div>
                </div>
                <div className="bio">{about || ''}</div>
            </div>
        )
    }
}

HeroInfo.propTypes = {
    currentHero: PropTypes.object,
    currentSkill: PropTypes.object,
    closeHeroInfo: PropTypes.func.isRequired,
    showSkill: PropTypes.func.isRequired,
    hideSkill: PropTypes.func.isRequired,
};