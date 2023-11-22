import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { NavLink } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Banner.css';
const Banner = () => {
    useEffect(()=> {
        Aos.init();
      },[])
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                effect='fade'
                speed={1000}
                autoplay={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >
                {/* slider-1 */}
                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/tqnftjy/Banner-slider3new.jpg" alt="" />
                        <div className='absolute inset-0 bg-gray-900 bg-opacity-70'></div>
                        <div className='absolute bottom-28 left-32'>
                            <p data-aos = "fade-down" data-aos-duration="1500" className='mb-4 text-5xl animate-bounce' style={{color:'#01A5C0'}}>20% OFF</p>
                            <h1 data-aos ="zoom-out-left" data-aos-duration="1500" className='text-white mb-6 text-6xl font-semibold'>Affordable Price! <br /> For Your Car Servicing</h1>
                            <br />
                            <div data-aos="zoom-in-right" data-aos-duration="2000">
                                <NavLink to='/login' className="btn px-8 text-md outline-none border-none text-center text-white transition duration-300 rounded-lg" id='bannerButton'>Explore more</NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* slider-2 */}
                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/ypD9kqG/Banner-slider4.jpg" alt="" />
                        <div className='absolute inset-0 bg-gray-900 bg-opacity-70'></div>
                        <div className='absolute bottom-28 left-32'>
                            <p data-aos = "fade-down" data-aos-duration="1500" className='mb-4 text-5xl animate-bounce' style={{color:'#01A5C0'}}>20% OFF</p>
                            <h1 data-aos ="zoom-out-left" data-aos-duration="1500" className='text-white mb-6 text-6xl font-semibold'>Affordable Price! <br /> For Your Car Servicing</h1>
                            <br />
                            <div data-aos="zoom-in-right" data-aos-duration="2000">
                                <NavLink to='/login' className="btn px-8 text-md outline-none border-none text-center text-white transition duration-300 rounded-lg" id='bannerButton'>Explore more</NavLink>
                            </div>
                        </div>
                    </div>                   
                </SwiperSlide>

                {/* slider-3 */}
                <SwiperSlide>
                <div className='relative'>
                        <img src="https://i.ibb.co/2FC5Y5L/Banner-slider5.jpg" alt="" />
                        <div className='absolute inset-0 bg-gray-900 bg-opacity-70'></div>
                        <div className='absolute bottom-28 left-32'>
                            <p data-aos = "fade-down" data-aos-duration="1500" className='mb-4 text-5xl animate-bounce' style={{color:'#01A5C0'}}>20% OFF</p>
                            <h1 data-aos ="zoom-out-left" data-aos-duration="1500" className='text-white mb-6 text-6xl font-semibold'>Affordable Price! <br /> For Your Car Servicing</h1>
                            <br />
                            <div data-aos="zoom-in-right" data-aos-duration="2000">
                                <NavLink to='/login' className="btn px-8 text-md outline-none border-none text-center text-white transition duration-300 rounded-lg" id='bannerButton'>Explore more</NavLink>
                            </div>
                        </div>
                    </div>                   
                </SwiperSlide>

                {/* slider-4 */}
                <SwiperSlide>
                <div className='relative'>
                        <img src="https://i.ibb.co/SwwQhGH/Banner-slider6.jpg" alt="" />
                        <div className='absolute inset-0 bg-gray-900 bg-opacity-70'></div>
                        <div className='absolute bottom-28 left-32'>
                            <p data-aos = "fade-down" data-aos-duration="1500" className='mb-4 text-5xl animate-bounce' style={{color:'#01A5C0'}}>20% OFF</p>
                            <h1 data-aos ="zoom-out-left" data-aos-duration="1500" className='text-white mb-6 text-6xl font-semibold'>Affordable Price! <br /> For Your Car Servicing</h1>
                            <br />
                            <div data-aos="zoom-in-right" data-aos-duration="2000">
                                <NavLink to='/login' className="btn px-8 text-md outline-none border-none text-center text-white transition duration-300 rounded-lg" id='bannerButton'>Explore more</NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;