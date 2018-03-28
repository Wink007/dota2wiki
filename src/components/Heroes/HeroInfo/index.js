import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import AboutHero from '../AboutHero';
import HeroMoreInfo from '../HeroMoreInfo';

import imgStr from '../../../../src/image/str.png';
import imgAgil from '../../../../src/image/agility.png';
import imgInt from '../../../../src/image/int.png';
import './index.scss';


export default class HeroInfo extends Component {
    render () {
        const { currentHero, currentSkill, closeHeroInfo, showSkill, hideSkill } = this.props;
        if(!currentHero) {
            return (
                <div className="hero-info">
                </div>    
            );            
        }
        const 
            { 
                attack,
                biography,
                characteristic,
                deffence,
                image,
                hp,
                mobility,
                mp,
                stats,
                name,
                about, 
                skills
            } = currentHero;
        
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
                            characteristic={characteristic}
                            imgStr={imgStr}
                            imgAgil={imgAgil}
                            imgInt={imgInt}
                        />
                    </TabPanel>
                    <TabPanel className="tab-panel">
                        <HeroMoreInfo
                            attack={attack}
                            biography={biography}
                            characteristic={characteristic}
                            deffence={deffence}
                            imgAgil={imgAgil}
                            imgInt={imgInt}
                            imgStr={imgStr}
                            mobility={mobility}
                            stats={stats}
                        />
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