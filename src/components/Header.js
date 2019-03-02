import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/Headshot.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar" ><img src={avatar} alt=""  /></a>
                    <h1><strong>Hello! </strong> Welcome to my portfolio. <br />
                    Spend a few minutes here for a <br />
                    Succinct showcase of my skills. <br />

                     </h1>

                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
