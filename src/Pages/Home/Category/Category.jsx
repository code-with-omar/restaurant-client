
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from "./../../../assets/home/slide1.jpg";
import slider2 from "./../../../assets/home/slide2.jpg";
import slider3 from "./../../../assets/home/slide3.jpg";
import slider4 from "./../../../assets/home/slide4.jpg";
import slider5 from "./../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <div>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@0.768': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    '@.960': {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    '@1.20': {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper mb-14"
            >
                <SwiperSlide>
                    <img src={slider1} alt="Slide 1" />
                    <h2 className='text-lg lg:text-3xl md:text-2xl -mt-10 text-center text-white uppercase'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="Slide 2" />
                    <h2 className='text-lg lg:text-3xl md:text-2xl -mt-10 text-center text-white uppercase'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="Slide 3" />
                    <h2 className='text-lg lg:text-3xl md:text-2xl -mt-10 text-center text-white uppercase'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="Slide 4" />
                    <h2 className='text-lg lg:text-3xl md:text-2xl -mt-10 text-center text-white uppercase'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="Slide 5" />
                    <h2 className='text-lg lg:text-3xl md:text-2xl -mt-10 text-center text-white uppercase'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider1} alt="Slide 1" />
                    <h2 className='text-lg lg:text-3xl md:text-2xl -mt-10 text-center text-white uppercase'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="Slide 2" />
                    <h2 className='text-lg lg:text-3xl md:text-2xl -mt-10 text-center text-white uppercase'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="Slide 3" />
                    <h2 className='text-lg lg:text-3xl md:text-2xl -mt-10 text-center text-white uppercase'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="Slide 4" />
                    <h2 className='text-lg lg:text-3xl md:text-2xl -mt-10 text-center text-white uppercase'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="Slide 5" />
                    <h2 className='text-lg lg:text-3xl md:text-2xl -mt-10 text-center text-white uppercase'>Desserts</h2>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;
