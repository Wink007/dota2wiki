import React, { Component } from 'react';

//import mainItems from 'cfg/main-items';
import './index.scss';


export default class MainItems extends Component {
    render () {
        const { imporvedItems, mainItems, main } = this.props;
        return (
            main ? 
            <div className="main-item">
                <h3>Основные</h3>
                <div className="wrapper">
                    {
                        mainItems.map((item, idx) => (
                            <span key={idx} tooltip={item.title} flow="down">
                                <img
                                    className="item-logo"
                                    src={item.image}
                                    alt={item.title}
                                />
                            </span>
                        ))
                    }
                </div>
            </div> : 
            <div className="main-item">
                <h3>Улучшения</h3>
                <div className="wrapper improved-wrapper">
                    {
                        imporvedItems.map((item, idx) => (
                            <span key={idx} tooltip={item.title} flow="down">
                                <img
                                    className="item-logo"
                                    src={item.image}
                                    alt={item.title}
                                />
                            </span>
                        ))
                    }
                </div>
            </div>
        )
    }
}