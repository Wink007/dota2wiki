import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';


export default class ShopButtons extends Component {
    render() {
        const { showAllItem, showBaseItem, showSideItem, showSecretItem } = this.props;
        return (
            <div className="shopButtons">
                <div className="wrapper">
                    <button onClick={showAllItem}>Все лавки</button>
                    <button className="base" onClick={showBaseItem}>Лавка на базе</button>
                    <button className="side" onClick={showSideItem}>Боковая лавка</button>
                    <button className="secret" onClick={showSecretItem}>Потайная лавка</button>
                </div>
            </div>
        );
    }
}

ShopButtons.propTypes = {
    showAllItem: PropTypes.func.isRequired,
    showBaseItem: PropTypes.func.isRequired,
    showSideItem: PropTypes.func.isRequired,
    showSecretItem: PropTypes.func.isRequired,
};