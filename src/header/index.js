import React from 'react';
import Navigation from './Navigation'
import Logout from './Logout'
import logo from './logo-5ka.png'
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} className='app-logo' alt='Лого пятерочки'/>
                <div className='header-item app-name'>
                    Система управления нормативами дашбордов РЦ
                </div>
                <Navigation/>
                <Logout/>
            </div>
        );
    }
}

export default Header;
