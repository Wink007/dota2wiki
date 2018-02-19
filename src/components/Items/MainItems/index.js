import React, { Component } from 'react';

import mainItems from 'cfg/main-items';
import './index.scss';


export default class MainItems extends Component {
    render () {
        return (
            <div className="main-item">
                <h3>Основные</h3>
                <div className="wrapper">
                    {
                        mainItems.map((item, idx) => (
                            <span tooltip={item.title} flow="down">
                                <img
                                    className="item-logo"
                                    src={item.image}
                                    alt={item.title}
                                    key={idx}
                                />
                            </span>
                        ))
                    }
                </div>
            </div>
        )
    }
}