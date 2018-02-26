import React, { Component } from 'react';

import ItemInfo from './ItemInfo';
import AllItems from './AllItems';
import Nav from '../Nav';

import mainItems from 'cfg/main-items';
import imporvedItems from 'cfg/improved-items';
import './index.scss';


export default class Items extends Component {
    state = {
        baseShop: false,
        secretShop: false,
        sideShop: false,
        currentItem: null,
    };
    showItem = (currentItem) => (e) => {
        e.preventDefault();
        this.setState({
            currentItem
        });
    };

    showBaseItem = () => {
        this.setState({
            baseShop: !this.state.baseShop,
            sideShop: false,
            secretShop: false,
        });
    };
    showSideItem = () => {
        this.setState({
            sideShop: !this.state.sideShop,
            baseShop: false,
            secretShop: false,
        });
    };
    showSecretItem = () => {
        this.setState({
            secretShop: !this.state.secretShop,
            baseShop: false,
            sideShop: false,
        });
    };
    render () {
        const path = this.props.location.pathname;
        const { baseShop, sideShop, secretShop, currentItem } = this.state;
        return (
            <div className="items-container">
                <Nav path={path} />
                <div className="items">
                    <ItemInfo currentItem={currentItem} />
                    <AllItems baseShop={baseShop} sideShop={sideShop} secretShop={secretShop} main mainItems={mainItems} showItem={this.showItem} />
                    <AllItems baseShop={baseShop} sideShop={sideShop} secretShop={secretShop} imporvedItems={imporvedItems} showItem={this.showItem} />
                    <div className="shopButtons">
                        <button onClick={this.showBaseItem}>Лавка на базе</button>
                        <button onClick={this.showSideItem}>Боковая лавка</button>
                        <button onClick={this.showSecretItem}>Секретная лавка</button>
                    </div>
                </div>
            </div>
        )
    }
}