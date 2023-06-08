import React, { Component } from 'react';
import Modals from './Modals';
import Button from './Button';
import bg from '../assets/Img/bg1.png';

class ImageRight extends Component {
    state = {
        modal: false,
        data: [],
        preview: ''
    };

    handelModal = (data) => {
        if (
            data.id === data.process.id) {
            this.setState({
                modal: true,
                data: data
            });
        }
    }
    handleModalClose = () => {
        this.setState({ modal: false });
    }
    handleNoPreview = () => {
        this.setState({ preview: 'no-preview' })
    }

    render() {
        const { data, index } = this.props;
        // console.log(!data.process.img1);
        return (
            <>
                <div key={index} className={`${data.size === '' ? 'col-lg-6 col-md-12' : 'col-lg-4 col-md-12'} px-4 fw-semibold small`}>
                    <h1 className="display-6">{data.title}</h1>
                    <p className="mt-5">{data.detail}</p>
                    <img src={bg} alt="" height="200px" className='d-none d-lg-block' />
                    <p className='float-start'>
                        <span className="bi bi-emoji-heart-eyes text-dark fs-2 me-2"></span>
                    </p>
                    <p className="text-end">
                        Sketch #<span className="fs-1"> {index + 1}</span>
                    </p>
                </div >

                <div key={data.id} className={data.size === "" ? 'col-lg-6 col-md-12' : 'col-lg-8 col-md-12'}>

                    {!data.process.img1

                        ?
                        <>
                            <img src={data.img} alt={data.id}
                                className={`${this.state.preview !== '' ? 'img img-fluid d-md-none d-lg-block no-preview' : 'img img-fluid d-md-none d-lg-block'}`} onClick={this.handleNoPreview} />

                            <img src={data.img} alt={data.id}
                                className={`${this.state.preview !== '' ? 'medium-img img-fluid d-none d-md-block d-lg-none no-preview' : 'medium-img img-fluid d-none d-md-block d-lg-none'}`} onClick={this.handleNoPreview} />

                        </>
                        :
                        <>
                            <img src={data.img} alt={data.id} className='img img-fluid d-md-none d-lg-block' onClick={() => this.handelModal(data)} />

                            <img src={data.img} alt={data.id} className='medium-img img-fluid d-none d-md-block d-lg-none' onClick={() => this.handelModal(data)} />

                        </>

                    }

                </div>

                {/* Modals */}
                <div>
                    {this.state.modal === true
                        ?
                        <>
                            <div id='overlay' onClick={this.handleModalClose} >
                                <Button />
                            </div>
                            <Modals
                                data={this.state.data}
                            />

                        </>
                        : ''
                    }
                </div>
            </>
        );
    }
}

export default ImageRight;