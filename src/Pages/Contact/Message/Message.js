import React from 'react';

const Message = () => {
    return (
        <div className="hero min-h-screen bg-cyan-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-2xl text-black/70 font-bold">Fell free to share your words with me about my tutorials or myself.</h1>
                <p className="text-black/70 py-6">Call me if needed on 01710444700 or simply contact me below.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-cyan-200">
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black/70">Name</span>
                    </label>
                    <input type="name" placeholder="Your name here" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black/70">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black/70">Subject</span>
                    </label>
                    <input type="subject" placeholder="Your subject here" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black/70">Mobile Number</span>
                    </label>
                    <input type="tel" placeholder="Your mobile number" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-warning">Send</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Message;