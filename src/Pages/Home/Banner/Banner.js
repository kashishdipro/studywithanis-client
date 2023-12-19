import React from 'react';
import banner from '../../../img/banner.png'
import midbanner from '../../../img/midbanner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
        <img src={banner} className="w-full" alt='Banner_Image'/>
            <div className="hero-content text-center h-full w-screen relative bg-black/30">
                <div className="max-w-md">
                <p className="text-2xl font-bold text-yellow-300">Welcome</p>
                <div className="divider">
                    <img className='h-12' src={midbanner} alt="Mid_Banner" />
                </div>
                <h1 className="text-5xl font-bold text-white">STUDY WITH ANIS</h1>
                <div className="divider"></div>
                <h6 className="text-2xl font-bold text-white">I Believe, Learning is Really Fun!</h6>
                </div>
            </div>
        </div>
    );
};

export default Banner;