import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.scss';


Preview.propTypes = {
    className: PropTypes.string,
    tab: PropTypes.object,
};


export default function Preview({ tab, className }) {
    const { title, subtitle, content, img } = tab;
    return (
        <div className={classnames('preview-wrap', className)}>
            <div className="preview-text">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {
                    content.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))
                }
                <a href="#" className="button">Перейти</a>
            </div>
            <div className="preview-image">
                <img src={img} alt=""/>
            </div>
        </div>
    );
}
