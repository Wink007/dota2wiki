import React, { Component } from 'react';
import ItemInfo from './ItemInfo';
import AllItems from './AllItems';
import Nav from '../Nav';

import mainItems from 'cfg/main-items';
import imporvedItems from 'cfg/improved-items';
import './index.scss';


export default class Items extends Component {
    render () {
        const path = this.props.location.pathname;
        return (
            <div className="items-container">
                <Nav path={path} />
                <div className="items">
                    <ItemInfo />
                    <AllItems main mainItems={mainItems} />
                    <AllItems imporvedItems={imporvedItems} />
                </div>
            </div>
        )
    }
}