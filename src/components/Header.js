import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <header>
                <nav class="menu">
                    <a href="#about">About</a>
                    <a href="#background">Background</a>
                    <a href="#contact">Contact</a>
                </nav>
        </header>
        )
    } 
}


export default Header