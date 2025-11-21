import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className='footer_content'>
                <div className='first_block'>
                    <h2 className='h2'>
                        Адвокат BG3 в Гомеле
                    </h2>
                    <p>
                        +375737608692
                    </p>
                    <p>Славногорск &#8594; Сметанагорск &#8594; Матвеегорск &#8594; Слевагорск</p>

                </div>
                <div className='second_block'>
                    <h2 className='h2'>Адреса консультаций</h2>
                    <p>Вон там(пальцем показываю)</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;