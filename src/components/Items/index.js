import React, { Component } from 'react';
import classnames from 'classnames';

//import withFetchData from 'components/HOC/withFetchData';
import ItemInfo from './ItemInfo';
import AllItems from './AllItems';
import ShopButtons from './ShopButtons';
import Nav from '../Nav';

import mainItems from 'cfg/main-items';
import imporvedItems from 'cfg/improved-items';
import './index.scss';


export default class Items extends Component {
    //static url = 'http://www.dota2.com/jsfeed/heropediadata?feeds=itemdata&v=3206368Q9QYH2VRrw8j&l=ru';

    state = {
        allShop: false,
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
            allShop: false,
            baseShop: true,
            sideShop: false,
            secretShop: false,
        });
    };
    showSideItem = () => {
        this.setState({
            allShop: false,
            sideShop: true,
            baseShop: false,
            secretShop: false,
        });
    };
    showSecretItem = () => {
        this.setState({
            allShop: false,
            secretShop: true,
            baseShop: false,
            sideShop: false,
        });
    };

    showAllItem = () => {
        this.setState({
            allShop: true,
            secretShop: false,
            baseShop: false,
            sideShop: false,
        });
    };

    render () {
        const path = this.props.location.pathname;
        const { allShop, baseShop, sideShop, secretShop, currentItem } = this.state;
        //const { data } = this.props;
        //console.log(data);

        return (
            <div className="items-container">
                <Nav path={path} />
                <div className="items">
                    <ItemInfo currentItem={currentItem} />
                    <AllItems
                        baseShop={baseShop}
                        sideShop={sideShop}
                        secretShop={secretShop}
                        main
                        mainItems={mainItems}
                        showItem={this.showItem}
                    />
                    <AllItems
                        baseShop={baseShop}
                        sideShop={sideShop}
                        secretShop={secretShop}
                        imporvedItems={imporvedItems}
                        showItem={this.showItem}
                    />
                    <div className="shops">
                        <ShopButtons
                            showAllItem={this.showAllItem}
                            showBaseItem={this.showBaseItem}
                            showSideItem={this.showSideItem}
                            showSecretItem={this.showSecretItem}
                        />
                        {
                            allShop ? 
                            <div className="mini-map-all"></div>
                            :
                            <div className={classnames('mini-map', {'base': baseShop}, {'side': sideShop}, {'secret': secretShop})}></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

//export default withFetchData(Items);