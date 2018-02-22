import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';


export default class Items extends Component {
    render () {
        const { path } = this.props;
        console.log(path)
        return (
            <div className="nav">
                <NavLink
                    exact
                    className="link main"
                    to="/"
                >
                    Меню
                </NavLink>
                <NavLink
                    className="link"
                    activeClassName="active"
                    to="/heroes"
                >
                    Герои
                </NavLink>
                <NavLink
                    className="link"
                    activeClassName="active"
                    to="/items"
                >
                    Предметы
                </NavLink>
                <NavLink
                    className="link"
                    activeClassName="active"
                    to="/creeps"
                >
                    Крипы
                </NavLink>
            </div>
        )
    }
}