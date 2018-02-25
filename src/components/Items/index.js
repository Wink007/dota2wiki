import React, { Component } from 'react';

import ItemInfo from './ItemInfo';
import AllItems from './AllItems';
import Nav from '../Nav';

import mainItems from 'cfg/main-items';
import imporvedItems from 'cfg/improved-items';
import './index.scss';


export default class Items extends Component {
    state = {
        currentItem: null,
    };
    showItem = (currentItem) => (e) => {
        e.preventDefault();
        this.setState({
            currentItem
        });
    };
    render () {
        const path = this.props.location.pathname;
        const { currentItem } = this.state;
        return (
            <div className="items-container">
                <Nav path={path} />
                <div className="items">
                    <ItemInfo currentItem={currentItem} />
                    <AllItems main mainItems={mainItems} showItem={this.showItem} />
                    <AllItems imporvedItems={imporvedItems} showItem={this.showItem} />
                </div>
            </div>
        )
    }
}