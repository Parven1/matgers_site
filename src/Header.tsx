import React from 'react';
import './Header.css';

const Heeader: React.FC = () => {
    return (
        <header className="header">
            <div className='title'>
                <h1>
                    Адвокат BG3 в Гомеле
                </h1>
                <p className='FIO'>
                    Гацулин Владислав
                </p>
                <text>
                    Зачем вам мой телефон
                </text>

                <p>
                    Светлогорск &#8594; Солигорск &#8594; Севастополь &#8594; Симферополь
                </p>
                <button className='first_button' onClick={() => window.open('https://baldursgate3.game/', '_blank')}>
                    Оставьте свои другие игры
                </button>
            </div>
        </header >
    )
}

export default Heeader;