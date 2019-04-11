import React from 'react';
import './Logout.css';

class Logout extends React.Component {
    render() {
        return (
            <div className='logout'>
                <div>Имя пользователя</div>
                <div className='logout-label'>Выйти</div>
            </div>
        );
    }
}

export default Logout;
