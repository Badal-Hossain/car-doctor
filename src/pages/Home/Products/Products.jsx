import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Products = () => {
    useEffect(()=> {
        Aos.init();
      },[])
    return (
        <div className="mx-auto text-center">
            <h5 className="font-bold text-red-500">Popular Products</h5>
            <h2 className="text-4xl font-bold my-3">Browse Our Products</h2>
            <p className="w-1/2 text-center mx-auto mb-8">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div>
                <div className="grid grid-cols-3 px-10 lg:ml-20">
                    <div className="col-span-1" data-aos="fade-down-right" data-aos-duration="1500">
                        <div className="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src="../../../../public/assets/images/services/6.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="rating rating-sm text-center mx-auto">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>
                                <p className="text-xl">Car Engine Plug</p>
                                <p className="text-red-500">Price: $20</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 mb-6" data-aos="fade-down" data-aos-duration="1500">
                        <div className="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src="../../../../public/assets/images/services/2.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="rating rating-sm text-center mx-auto">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>
                                <p className="text-xl">Car Air Filter</p>
                                <p className="text-red-500">Price: $20</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down-left" data-aos-duration="1500">
                        <div className="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src="../../../../public/assets/images/services/5.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="rating rating-sm text-center mx-auto">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>
                                <p className="text-xl">Cools Led Light</p>
                                <p className="text-red-500">Price: $20</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 px-10 lg:ml-20">
                    <div className="col-span-1" data-aos="fade-up-right" data-aos-duration="1500">
                        <div className="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src="../../../../public/assets/images/services/4.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="rating rating-sm text-center mx-auto">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>
                                <p className="text-xl">Cools Led Light</p>
                                <p className="text-red-500">Price: $20</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1" data-aos="fade-up" data-aos-duration="1500">
                        <div className="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src="../../../../public/assets/images/services/3.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="rating rating-sm text-center mx-auto">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>
                                <p className="text-xl">Cools Led Light</p>
                                <p className="text-red-500">Price: $20</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1500">
                        <div className="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src="../../../../public/assets/images/services/1.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="rating rating-sm text-center mx-auto">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>
                                <p className="text-xl">Cools Led Light</p>
                                <p className="text-red-500">Price: $20</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline btn-error my-6">More Products</button>
        </div>
    );
};

export default Products;