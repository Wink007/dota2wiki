import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';


export default class SkillsTooltip extends Component {
    
    render () {
        const { currentSkill, heroName } = this.props;
        if(!currentSkill) {
            return (
                null    
            );            
        }
        const { image, name, description } = currentSkill;
                  
        return (
            <div className="skill-tooltip">
                <div className="title">
                    <img src={image || ''} alt={name || ''}/>
                    <div className="skill-info">
                        <span className="skill-name">{name || ''}</span>
                        <span className="skill-owner">{heroName || ''}</span>
                    </div>
                </div>
                <div className="about">
                    {description}
                </div>
            </div>
        )
    }
}

SkillsTooltip.propTypes = {
    currentSkill: PropTypes.object,
    heroName: PropTypes.string.isRequired,
};