import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class Modals extends Component {
    handleModalClose = () => {
        console.log("close");
    }
    render() {
        const { data } = this.props;
        return (
            <>
                <div id='modal' className="modal-container p-4 ">
                    <div className='mt-4'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <img src={data.process.img1} alt={data.id} className='modal-img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={data.process.img2} alt={data.id} className='modal-img' />
                            </SwiperSlide>
                            {data.process.img3

                                ?
                                <SwiperSlide>
                                    <img src={data.process.img3} alt={data.id} className='modal-img' />
                                </SwiperSlide>

                                :

                                ''
                            }

                        </Swiper>
                    </div>
                </div>
            </>
        );
    }
}

export default Modals;