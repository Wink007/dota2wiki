import React, { Component } from 'react';
//import mainItems from 'cfg/main-items';

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
                    <div className="about">
                        <div className="about-main">
                            <p className="use">Использование: <span>телепорт</span></p>
                            <p className="stats">+1 к уму</p>
                            <p className="description">описание предмета</p>
                        </div>
                        <p className="notation">какое то дополнение</p>
                    </div>
                </div>
            </div>
        )
    }
}