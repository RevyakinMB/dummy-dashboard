import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <div className='navigation-panel'>
                <Link to={ROUTES.INDICATORS} className='navigation-item'>
                    Показатели
                </Link>
                <Link to={ROUTES.STANDARDS} className='navigation-item'>
                    Нормативы
                </Link>
                <Link to={ROUTES.ACTUAL_VALUES} className='navigation-item'>
                    Фактические значения
                </Link>
            </div>
        );
    }
}

export default Navigation;
