import React from 'react';
import Anis from '../../../img/Anis.webp'
import fb from '../../../img/fb.png'
import yt from '../../../img/youtube.png'
import { Link } from 'react-router-dom';

const Me = () => {
    return (
        <div className="hero min-h-screen bg-white/50">
            <div className="hero-content flex-col lg:flex-row">
                <div className=''>
                    <img src={Anis} alt='Anisul Islam' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='flex gap-4 my-5'>
                        <Link to='https://www.facebook.com/studywithanis/?pnref=lhc'><img className='h-12' src={fb} alt='fb'/></Link>
                        <Link to='https://www.youtube.com/channel/UCEXwc6mNh7Lakj6lX-7a2Mg'><img className='h-12' src={yt} alt='yt'/></Link>
                    </div>
                </div>
                <div className='sm:mx-20 my-0'>
                    <p className="text-white">Hi! My name is Anis. Welcome to my personal page that I’ve designed to showcase my skills and expertise that I’ve accumulated over the year. I’ve also placed all my social links at the left side, feel free to connect with me. I’d love to be given the opportunity to hear from you.</p>
                    <p className="py-6 text-white">I like to call myself “a passionate computer science teacher”. I always had a wish on my mind that I will do something for the computer science students that’s why I made lots of videos on different subjects. My first priority is making the subject more interesting and clear so you can feel it and don’t get bore.</p>
                </div>
            </div>
        </div>
    );
};

export default Me;