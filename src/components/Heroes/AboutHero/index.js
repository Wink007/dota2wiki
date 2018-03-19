import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SkillsTooltip from '../SkillsTooltip';

import './index.scss';


export default class AboutHero extends Component {
    render () {
        const 
            { 
                about,
                hp,
                mp,
                image,
                currentSkill, 
                name, 
                showSkill,
                skills,
                hideSkill,
                characteristic,
                imgStr, 
                imgAgil, 
                imgInt,
            } = this.props;

        return (
            <div className="about">
                <div className="info-block">
                    <div className="img-block">
                        <div className="heroes-logo">
                            <img className="hero-logo-info" src={image || ''} alt="" />
                        </div>
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
                    </div>
                    <div className="info">
                        <p className="name">
                            {name || ''}
                            {characteristic === 'Strength' && <img src={imgStr} alt="" tooltip='Сила' />}
                            {characteristic === 'Agility' && <img src={imgAgil} alt="" tooltip='Ловкость' />}
                            {characteristic === 'Intelligence' && <img src={imgInt} alt="" tooltip='Интеллект' />}
                            {
                                skills.map((icon, idx) => (
                                    icon.aghanim_description && <span key={idx} className="aghanim"></span>
                                ))
                            }
                        </p>
                        <p className="description">{about || ''}</p>
                    </div>
                </div>
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
        )
    }
}

AboutHero.propTypes = {
    currentSkill: PropTypes.object,
    showSkill: PropTypes.func.isRequired,
    hideSkill: PropTypes.func.isRequired,
    about: PropTypes.string.isRequired,
    hp: PropTypes.array.isRequired,
    mp: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    characteristic: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    imgStr: PropTypes.string.isRequired,
    imgAgil: PropTypes.string.isRequired,
    imgInt: PropTypes.string.isRequired,
};