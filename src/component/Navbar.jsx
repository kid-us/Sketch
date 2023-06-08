import React, { Component } from 'react';
import logo from '../assets/Img/logo.png';
import SmallHero from './SmallHero';
import { links } from '../constant';

class Navbar extends Component {
    state = {
        note: {
            id: 'home',
            name: '- Hi',
            description: 'Hey there everyone! 👋 I\'m Kidus, I am a sketch drawing lover. I sketch photos or anything you want and I can make it awesome like the exact looking of the drawing object. I have worked so many sketch\'s for me and for my clients so far. ',
            slogan: 'Take look at'
        },
        clicked: false
    };

    handleMenu = () => {
        if (this.state.clicked === false)
            this.setState({ clicked: true });
        else
            this.setState({ clicked: false });
    }

    handleChange = (link) => {
        this.setState({ note: link });
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg  fw-semibold pt-4 fixed-top">
                    <div className="container-fluid">
                        <a className="nav-link d-block d-md-none bi bi-menu-button border-bottom cursor" onClick={this.handleMenu}></a>

                        <a className="navbar-brand ms-sm-0 ms-lg-5 ms-md-5 small fs-6 border-bottom" href="#">
                        </a>

                        <ul className="navbar-nav">
                            <a className="navbar-brand me-sm-0 me-lg-5 me-md-5 small fs-6 border-bottom" href="#">
                                <span className='small'>Sketch </span> It
                                <img src={logo} alt="" height="27px" className='ms-2' />
                            </a>
                        </ul>
                    </div>
                </nav >

                {this.state.clicked === true ?
                    <>
                        <div id="menu-container" className="animate__animated animate__fadeInLeft text-center fw-semibold">
                            <div className='menus'>
                                <ul className="menu-navs small">
                                    {links.map((link) => (
                                        <li key={link.id} className='nav-item mb-4'>
                                            <a href='#'
                                                className={`${link.id === this.state.note.id ? 'text-danger bold' : 'glitch'} cursor animate__animated small`}
                                                onClick={() => this.handleChange(link)}>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </>
                    :
                    ''
                }
                <SmallHero info={this.state.note} />
            </>
        )
    }
}

export default Navbar;