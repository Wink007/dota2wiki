import React, { Component } from 'react';

import './index.scss';


export default class ItemInfo extends Component {
    render () {
        return (
            <div className="info-container">
                <h3>Информация</h3>
                <div className="wrapper">
                    <div className="info-head">
                        <img src="" alt="" className="item-logo" />
                        <div>
                            <p className="title">town portal scroll</p>
                            <p className="price">50</p>
                        </div>
                    </div>
                    <div className="description">
                        <div className="description-head">
                            <span className="use">Использовать телепорт</span>
                            <span className="mana">50</span>
                            <span className="reload">80</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}