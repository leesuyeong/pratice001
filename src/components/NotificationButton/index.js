import React from 'react';
import './NotificationButton.css';

import ic_notification from '../../assets/images/ic_notification.png';
/*
삼항연산자
조건 ? 값1 : 값2 의 형태를 가집니다.
조건이 참일경우 값1을 반환하고, 조건이 거짓일경우 값2를 반환
*/
const NotificationButton = ({notification}) => {
    return(
        <a className={notification ? 'notification-button active' : 'notification-button'}>
            <img className="notification-image" src={ic_notification}/>
        </a>
    );
}
export default NotificationButton;