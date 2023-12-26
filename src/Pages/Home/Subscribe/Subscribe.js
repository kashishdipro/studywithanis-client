import React from 'react';
import midbanner from '../../../img/midbanner.jpg'

const Subscribe = () => {
    return (
        <div className="hero">
            <div className="hero-content text-center h-full w-screen relative bg-black/30">
                <div className="max-w-md">
                    <div className="divider">
                        <h3 className="text-lg md:text-2xl font-bold text-yellow-300">Stay Connected</h3>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold my-5 text-white/90">SUBSCRIBE!</h1>
                    <div className="divider">
                        <img className='h-12' src={midbanner} alt="Mid_Banner" />
                    </div>
                    <div className='flex mx-10 my-10'>
                        <div className="form-control mr-5 text-gray-500">
                            <input type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <button className="btn bg-white/60 text-gray-400">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;