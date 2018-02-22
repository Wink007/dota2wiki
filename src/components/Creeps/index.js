import React, { Component } from 'react';

import Nav from '../Nav';

import 'styles/index.scss';

export default class Creeps extends Component {
    render () {
        const path = this.props.location.pathname;
        console.log(path);
        return (
            <div>
                <Nav path={path} />
                CREEPS
            </div>
        )
    }
}