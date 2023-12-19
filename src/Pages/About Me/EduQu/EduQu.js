import React from 'react';
import book from '../../../img/book.png'
import badge from '../../../img/badge.png'
import { Link } from 'react-router-dom';

const EduQu = () => {
    return (
        <div className="hero min-h-screen bg-cyan-300 p-4">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className='w-1/2'>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='h-12' src={book} alt='Book_Image'/>
                        <h6 className='text-xl font-bold text-white'>Education</h6>
                    </div>
                    <ul className="list-disc">
                        <li className='text-white/90 text-xl font-bold'>B.Sc. 2013 – 2017</li>
                        <p className='text-white/90 text-lg'>Studied B.Sc. in CSE from Leading University, Sylhet , Bangladesh.</p>
                    </ul>
                    <ul className="list-disc">
                        <li className='text-white/90 text-xl font-bold'>Professional diploma 2010 – 2012</li>
                        <p className='text-white/90 text-lg'>Studied Travel/Tourism Marketing at <Link to='https://www.facebook.com/pages/London-School-of-Commerce-IT/115841868430767?timeline_context_item_type=intro_card_education&timeline_context_item_source=100000669223155'>London School of Commerce & IT</Link>,London,UK.</p>
                    </ul>
                    <ul className="list-disc">
                        <li className='text-white/90 text-xl font-bold'>HSC 2007 – 2008</li>
                        <p className='text-white/90 text-lg'>Studied Science at <Link to='https://www.facebook.com/pages/Baramchal-High-School-College/127244583994158?timeline_context_item_type=intro_card_education&timeline_context_item_source=100000669223155'>Baramchal High School & College,Sylhet,Bangladesh.</Link></p>
                    </ul>
                    <ul className="list-disc">
                        <li className='text-white/90 text-xl font-bold'>SSC 2005 – 2006</li>
                        <p className='text-white/90 text-lg'>Studied Science at Singerkatch High School & College,Sylhet,Bangladesh.</p>
                    </ul>
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='h-12' src={badge} alt='Badge_Image'/>
                        <h6 className='text-xl font-bold text-white'>Works</h6>
                    </div>
                    <ul className="list-disc">
                        <li className='text-white/90 text-xl font-bold'><Link to='https://www.facebook.com/people/Jhingabari-High-school-and-college/100067200009164/'>Jhingabari High school and college</Link></li>
                        <p className='text-white/90 text-lg'>ICT Teacher · April 2016 to 12 August 2017 · Sylhet.</p>
                    </ul>
                    <ul className="list-disc">
                        <li className='text-white/90 text-xl font-bold'>Sylhet Engineering college</li>
                        <p className='text-white/90 text-lg'>Computer Science Lecturer. January 2018 to running . Sylhet.</p>
                    </ul>
                    <ul className="list-disc">
                        <li className='text-white/90 text-xl font-bold'>Youtube</li>
                        <p className='text-white/90 text-lg'>Computer Teacher · 7 January 2010 to present · Sylhet.</p>
                    </ul>
                    <ul className="list-disc">
                        <li className='text-white/90 text-xl font-bold'>ICCS coaching center</li>
                        <p className='text-white/90 text-lg'>Computer Teacher · 7 November 2017 to present · Sylhet.</p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EduQu;