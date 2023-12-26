import React from 'react';
import banner from '../../../img/banner.png'
import midbanner from '../../../img/midbanner.jpg'

const Banner = () => {
    return (
        <div className="hero">
            <img src={banner} className="w-full" alt='Banner_Image'/>
            <div className="hero-content text-center h-full w-screen relative bg-black/30">
                <div className="max-w-md">
                <h6 className="text-lg md:text-2xl font-bold text-yellow-300 mb-5">Welcome</h6>
                <div className="divider">
                    <img className='h-12' src={midbanner} alt="Mid_Banner" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white my-5">STUDY WITH ANIS</h1>
                <div className="divider"></div>
                <h5 className="text-2xl font-bold text-white my-5">I Believe, Learning is Really Fun!</h5>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;