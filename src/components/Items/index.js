import React, { Component } from 'react';
import ItemInfo from './ItemInfo';
import MainItems from './MainItems';
import ImprovedItems from './ImprovedItems';

//import mainItems from 'cfg/main-items';
import './index.scss';


export default class Items extends Component {
    render () {
        // const { title, image, price, add_stats, usage, description, notation } = mainItems;
        return (
            <div className="items-container">
                <ItemInfo />
                <MainItems />
                <ImprovedItems />
            </div>
        )
    }
}