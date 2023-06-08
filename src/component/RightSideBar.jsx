import React, { Component } from 'react';
import { sketchs } from '../constant';
import ImageLeft from './ImageLeft';
import ImageRight from './ImageRight';

class RightSideBar extends Component {

    render() {
        return (
            <>
                <div className='row img-container'>
                    <h1 className="display-1 text-center pb-5 d-block d-md-none ">Tadda ✌️</h1>
                    {sketchs.map((sketch, index) => (
                        <div key={sketch.id}>
                            {index % 2 === 0
                                ?
                                <div key={sketch.id} className="col-12 shadow-lg rounded mb-5 p-4 sketch-container-left">
                                    <div className="row">
                                        <ImageLeft data={sketch} index={index} />
                                    </div>
                                </div>

                                :

                                <div key={sketch.id} className="col-12 shadow-lg rounded mb-5 p-4 sketch-container-right">
                                    <div className="row">
                                        <ImageRight data={sketch} index={index} />
                                    </div>
                                </div>
                            }
                        </div>
                    ))
                    }
                </div >
            </>
        )
    }
}

export default RightSideBar;