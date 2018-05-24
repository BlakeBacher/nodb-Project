
import React from 'react';
import rainwhite from './../rainwhite.png'
import Weather from './Weather'
import Logo from './Logo'


function Header(){
    return(
        <header>
            <div className="blackraintitle"> Black Rain Window Films <Logo/>
                <div className = 'weatherdiv'>
                    <Weather/>
                </div> 
            </div>
        </header>

    )
}

export default Header;