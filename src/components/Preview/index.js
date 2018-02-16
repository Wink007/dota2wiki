import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './index.scss';


Preview.propTypes = {
    className: PropTypes.string,
    tab: PropTypes.object,
};


export default function Preview({ tab, className }) {
    const { title, subtitle, content, img, link } = tab;
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
                <Link to={link} className="button">Перейти</Link>
            </div>
            <div className="preview-image">
                <img src={img} alt=""/>
            </div>
        </div>
    );
}
