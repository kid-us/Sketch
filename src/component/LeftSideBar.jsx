import React, { Component } from 'react';
import animate from '../assets/Css/animate.min.css';
import { links } from '../constant';
import RightSideBar from './RightSideBar';
import Hero from './Hero';

class LeftSideBar extends Component {
    state = {
        note: {
            id: 'home',
            name: '- Hi',
            description: 'Hey there everyone! 👋 I\'m Kidus, I am a sketch drawing lover. I sketch photos or anything you want and I can make it awesome like the exact looking of the drawing object. I have worked so many sketch\'s for me and for my clients so far.',
            slogan: 'Take look at'
        }
    }

    handleNote = (link) => {
        this.setState({ note: link });
    }

    render() {
        return (
            <>
                <div className="col-2 d-none d-md-block">
                    <div className="sidebar">
                        <div className='outer-circle small fw-semibold'>
                            <div className='links'>
                                <ul className="me-4">
                                    {links.map((link, index) => (
                                        <li key={link.id} className='nav-item mb-4'>
                                            <a
                                                className={`${index === 1 || index === 2 ? 'ms-3' : ''} nav-link bold ${link.id === this.state.note.id ? 'text-danger' : 'glitch'} cursor`}

                                                onClick={() => this.handleNote(link)}>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="inner-circle">
                                <div className="nested-circle"></div>
                            </div>
                        </div>
                    </div >
                </div >

                <div className="col-lg-10 col-md-9 ms-md-5 ms-lg-0 col-12">
                    <div className="row justify-content-between">
                        <div className="col-lg-2 col-md-12 col-12 col-12 d-none d-md-block">
                            <Hero info={this.state.note} />
                        </div>
                        <div className="col-12 d-block d-md-none">

                        </div>
                        <div className="col-lg-9 col-md-12 col-12">
                            <RightSideBar />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default LeftSideBar;