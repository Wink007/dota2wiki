import React, { Component } from 'react';

import AllHeroes from './AllHeroes';
import HeroInfo from './HeroInfo';
import heroes from 'cfg/heroes.json';
import Nav from '../Nav';

import './index.scss';

export default class Heroes extends Component {
    state = {
        currentHero: null,
        currentSkill: null,
    };
    
    showHero = (currentHero) => (e) => {
        e.preventDefault();
        this.setState({
            currentHero
        });
        const scrollStep = -window.scrollY / (500 / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY !== 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
    };

    showSkill = (currentSkill) => (e) => {
        e.preventDefault();
        this.setState({
            currentSkill
        });
    };

    hideSkill = (currentSkill) => (e) => {
        e.preventDefault();
        this.setState({
            currentSkill: null,
        });
    };

    closeHeroInfo = (currentHero) => (e) => {
        e.preventDefault();
        this.setState({
            currentHero: null,
        });
    };

    render () {
        const path = this.props.location.pathname;
        const { currentHero, currentSkill } = this.state;
        return (
            <div>
                <Nav path={path} />
                <div className="heroes-container">
                    <div className="wrapper" style={currentHero ? {flex: 2} : {}}>
                        <AllHeroes showHero={this.showHero} strength heroes={heroes} />
                        <AllHeroes showHero={this.showHero} agility heroes={heroes} />
                        <AllHeroes showHero={this.showHero} intelligence heroes={heroes} />
                    </div>
                    <HeroInfo
                        closeHeroInfo={this.closeHeroInfo}
                        showSkill={this.showSkill}
                        hideSkill={this.hideSkill}
                        currentHero={currentHero}
                        currentSkill={currentSkill}
                    />
                </div>
            </div>
        )
    }
}