import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import AboutHero from '../AboutHero';

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
        const { image, hp, mp, stats, name, about, skills, biography } = currentHero;
        
        return (
            <div className={currentHero ? "hero-info show-hero-info" : "hero-info"}>
                <a onClick={closeHeroInfo(currentHero)} href="" className="close">X</a>
                <Tabs className="info-tabs">
                    <TabList className="list">
                        <Tab>О герое</Tab>
                        <Tab>Подробнее</Tab>
                        <Tab>Древо талантов</Tab>
                    </TabList>
                    <TabPanel className="tab-panel">
                        <AboutHero
                            about={about}
                            currentSkill={currentSkill}
                            image={image}
                            heroName={name}
                            hideSkill={hideSkill}
                            hp={hp}
                            mp={mp}
                            name={name}
                            showSkill={showSkill}
                            skills={skills}
                        />
                    </TabPanel>
                    <TabPanel className="tab-panel">
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
                        <div className="bio">
                            <h2>Биография</h2>
                            <span>
                                {biography}
                            </span>
                        </div>
                    </TabPanel>
                    <TabPanel className="tab-panel">
                        Таланты
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

HeroInfo.propTypes = {
    currentHero: PropTypes.object,
    currentSkill: PropTypes.object,
    closeHeroInfo: PropTypes.func.isRequired,
};