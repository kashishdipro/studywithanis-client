import React from 'react';
import midbanner from '../../../img/midbanner.jpg'
import ICTCover from '../../../img/ICT-Cover.webp'

const PlayList = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center h-full w-screen relative bg-green-300">
                <div className="max-w-md">
                    <div className="divider">
                        <h3 className="text-2xl font-bold text-yellow-300">Popular</h3>
                    </div>
                    <h1 className="text-4xl font-bold my-10 text-white/90">TUTORIAL PLAYLISTS</h1>
                    <div className="divider">
                        <img className='h-12' src={midbanner} alt="Mid_Banner" />
                    </div>
                </div>
            </div>
            {/* Card
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center gap-4 px-4 py-5'>
                <div className="card card-compact w-80 bg-neutral-100 shadow-xl">
                <img src={ICTCover} alt="img-item" className="h-full w-full rounded-xl"/>
                </div>
            </div> */}
        </div>
    );
};

export default PlayList;