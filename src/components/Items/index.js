import React, { Component } from 'react';
import ItemInfo from './ItemInfo';
import MainItems from './MainItems';
import ImprovedItems from './ImprovedItems';


import './index.scss';

export default class Items extends Component {
    render () {
        return (
            <div className="items-container">
                <ItemInfo />
                <MainItems />
                <ImprovedItems />
            </div>
        )
    }
}