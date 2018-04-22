import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';


export default class AllHeroes extends Component {
    render () {
        const { heroes, strength, agility, showHero } = this.props;
        return (
            strength ?
            <div className="all-heroes">
                <div className="characters">Сила</div>
                <div className="heroes-wrapper">
                    {
                        heroes.filter((values) => {
                            return (values.characteristic === 'Strength')
                        })
                        .map((item, idx) => (
                            <a href="" key={idx} data-text={item.name} onClick={showHero(item)}>
                                <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${item.name1}_vert.jpg`} alt={item.name} className="heroes-logo" />
                            </a>
                        ))
                    }
                </div>
            </div>
            :
            (
                agility ?
                <div className="all-heroes">
                    <div className="characters">Ловкость</div>
                    <div className="heroes-wrapper">
                        {
                            heroes.filter((values) => {
                                return (values.characteristic === 'Agility')
                            })
                            .map((item, idx) => (
                                <a href="" key={idx} data-text={item.name} onClick={showHero(item)}>
                                    <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${item.name1}_vert.jpg`} alt={item.name} className="heroes-logo" />
                                </a>
                            ))
                        }
                    </div>
                </div>
                :
                <div className="all-heroes">
                    <div className="characters">Интеллект</div>
                    <div className="heroes-wrapper">
                        {
                            heroes.filter((values) => {
                                return (values.characteristic === 'Intelligence')
                            })
                            .map((item, idx) => (
                                <a href="" key={idx} data-text={item.name} onClick={showHero(item)}>
                                    <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${item.name1}_vert.jpg`} alt={item.name} className="heroes-logo" />
                                </a>
                            ))
                        }
                    </div>
                </div>
            )
        )    
    }
}

AllHeroes.propTypes = {
    heroes: PropTypes.array.isRequired,
    strength: PropTypes.bool,
    agility: PropTypes.bool,
    showHero: PropTypes.func.isRequired,
};