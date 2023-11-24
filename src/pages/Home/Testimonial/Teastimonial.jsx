import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import './Testimonial.css'


const Teastimonial = () => {
    return (
        <div>
            <div className="mx-auto text-center ">
                <h5 className="text-red-500 font-bold">Teastimonial</h5>
                <h2 className="text-4xl font-bold my-4">What Customer Says</h2>
                <p className="opacity-80 mb-8">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div>
                <>
                    <Swiper
                        modules={[EffectCoverflow, Autoplay]}
                        effect={'coverflow'}
                        grabCursor={true}
                        speed={1000}
                        autoplay={true}
                        centeredSlides={false}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        }}
                        className="mySwiper"
                    >
                       
                        <SwiperSlide>
                            <div>
                                <div className='flex'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="../../../../public/assets/images/testimonial/1.jpg" />
                                        </div>
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <h2 className='text-2xl font-bold'>Mariya Harley</h2>
                                        <p>Businessman</p>
                                    </div>                                   
                                </div>     
                                <div>
                                    <p className='my-3'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                                    </p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>                        
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div className='flex'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="../../../../public/assets/images/testimonial/2.jpg" />
                                        </div>
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <h2 className='text-2xl font-bold'>Lilly Rodriguez</h2>
                                        <p>Businessman</p>
                                    </div>                                   
                                </div>     
                                <div>
                                    <p className='my-3'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                                    </p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>                        
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div className='flex'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="../../../../public/assets/images/testimonial/3.jpg" />
                                        </div>
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <h2 className='text-2xl font-bold'>Anjelina joly</h2>
                                        <p>Businessman</p>
                                    </div>                                   
                                </div>     
                                <div>
                                    <p className='my-3'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                                    </p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>                        
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div className='flex'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="../../../../public/assets/images/testimonial/4.jpg" />
                                        </div>
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <h2 className='text-2xl font-bold'>Diana Emerson</h2>
                                        <p>Businessman</p>
                                    </div>                                   
                                </div>     
                                <div>
                                    <p className='my-3'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                                    </p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>                        
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div className='flex'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="../../../../public/assets/images/testimonial/5.jpg" />
                                        </div>
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <h2 className='text-2xl font-bold'>Mariya Farley</h2>
                                        <p>Businessman</p>
                                    </div>                                   
                                </div>     
                                <div>
                                    <p className='my-3'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                                    </p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>                        
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div className='flex'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="../../../../public/assets/images/testimonial/6.jpg" />
                                        </div>
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <h2 className='text-2xl font-bold'>Juliana Tinsley</h2>
                                        <p>Businessman</p>
                                    </div>                                   
                                </div>     
                                <div>
                                    <p className='my-3'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                                    </p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>                        
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div className='flex'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="../../../../public/assets/images/testimonial/7.jpg" />
                                        </div>
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <h2 className='text-2xl font-bold'>Selena Gomez</h2>
                                        <p>Businessman</p>
                                    </div>                                   
                                </div>     
                                <div>
                                    <p className='my-3'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                                    </p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>                        
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div className='flex'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="../../../../public/assets/images/testimonial/8.jpg" />
                                        </div>
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <h2 className='text-2xl font-bold'>Lena Farley</h2>
                                        <p>Businessman</p>
                                    </div>                                   
                                </div>     
                                <div>
                                    <p className='my-3'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                                    </p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>                        
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div className='flex'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="../../../../public/assets/images/testimonial/9.jpg" />
                                        </div>
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <h2 className='text-2xl font-bold'>Daniela Ellison</h2>
                                        <p>Businessman</p>
                                    </div>                                   
                                </div>     
                                <div>
                                    <p className='my-3'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                                    </p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>                        
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default Teastimonial;