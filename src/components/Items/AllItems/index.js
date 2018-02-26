import React, { Component } from 'react';

//import mainItems from 'cfg/main-items';
import './index.scss';


export default class MainItems extends Component {
    render () {
        const { baseShop, sideShop, secretShop, imporvedItems, mainItems, main, showItem } = this.props;
        return (
            main ? 
            <div className="main-item">
                <h3>Основные</h3>
                <div className="wrapper">
                    {
                        mainItems.map((item, idx) => (
                            <a
                                key={idx}
                                tooltip={item.title}
                                flow="down"
                                onClick={showItem(item)}
                            >
                                <img
                                    className={(baseShop && !item.base_shop) || (sideShop && !item.sideShop) || (secretShop && !item.secretShop) ? "item-logo onClick" : "item-logo" }
                                    src={item.image}
                                    alt={item.title}
                                />
                            </a>
                        ))
                    }
                </div>
            </div> : 
            <div className="main-item">
                <h3>Улучшения</h3>
                <div className="wrapper improved-wrapper">
                    {
                        imporvedItems.map((item, idx) => (
                            <a
                                key={idx}
                                tooltip={item.title}
                                flow="down"
                                onClick={showItem(item)}
                            >
                                <img
                                    className={(baseShop && !item.base_shop) || (sideShop && !item.sideShop) || (secretShop && !item.secretShop) ? "item-logo onClick" : "item-logo" }
                                    src={item.image}
                                    alt={item.title}
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    }
}