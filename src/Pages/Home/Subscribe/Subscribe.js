import React from 'react';
import midbanner from '../../../img/midbanner.jpg';
import toast from 'react-hot-toast';

const Subscribe = () => {
    const handleSubscribe = event =>{
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        // Subscribe Package
        const subscribe = {
            email
        }
        // Post to Message to DB
        fetch('http://localhost:5000/subscribers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(subscribe)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Your are added as subscriber successfully');
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }   
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
                    <form onSubmit={handleSubscribe} className='flex mx-10 my-10'>
                        <div className="form-control mr-5 text-gray-500">
                            <input name='email' type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input className="btn bg-white/60 text-gray-400" type='submit' value='Subscribe' input/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;