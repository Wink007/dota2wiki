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
        const { 
                about,
                aghanim_description,
                aghanim_description_name,
                description,
                image,
                effects,
                name,
            } = currentSkill;
                  
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
                    {
                        about.map((items, index) => (
                            <div key={index}>
                                {
                                    items.type && 
                                    <p className="type">
                                        ТИП: <span>{items.type || '123'}</span>
                                    </p>
                                }
                                {
                                    items.affect && 
                                    <p className="affect">
                                        ДЕЙСТВУЕТ: <span>{items.affect}</span>
                                    </p>
                                }
                                {
                                    items.damage && 
                                    <p className="damage">
                                        УРОН: <span>{items.damage}</span>
                                    </p>
                                }
                                {
                                    items.immunity && 
                                    <p className="immunity">
                                        СКВОЗЬ НЕВОСПРИИМЧИВОСТЬ К МАГИИ: <span className={items.immunity === 'да' ? 'green' : 'red'}>{items.immunity}</span>
                                    </p>
                                }
                                {
                                    items.deflation && 
                                    <p className="deflation">
                                        МОЖНО РАЗВЕЯТЬ: <span className={items.deflation === 'да' ? 'green' : 'red'}>{items.deflation}</span>
                                    </p> 
                                }
                            </div>     
                        ))
                    }
                </div>
                <div className="description">
                    {description}
                </div>
                {
                    aghanim_description && 
                    <div className="about-aghanim">
                        <p className="improvement">Улучшается с Aghanim's Scepter</p>
                        <div className="about-text">
                            <p>{aghanim_description_name || ''}</p>
                            <p>{aghanim_description}</p>
                        </div>
                    </div>
                }
                {
                    effects.map((effect, idx) => (
                        <div key={idx} className="effects">
                            {
                                Object.keys(effect).map((objectKey, index) => {
                                    let value = effect[objectKey];
                                    return value.map((item, index) => (
                                        <p key={index} className="effect">
                                            {item.name || ''}
                                            {item.action && <span className="action">{item.action}</span>}
                                        </p>
                                    ))
                                })
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}

SkillsTooltip.propTypes = {
    currentSkill: PropTypes.object,
    heroName: PropTypes.string.isRequired,
};