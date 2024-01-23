import React, {useContext} from 'react';
// import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const Message = () => {
    // const {user} = useContext(AuthContext);
    // Handle Client Message From Input Field
    const handleMessage = event =>{
        event.preventDefault();
        const form = event.target;
        const clientName = form.clientName.value;
        const email = form.email.value;
        // const email = user?.email || 'unregistered';
        const subject = form.subject.value;
        const phoneNumber = form.phoneNumber.value;
        
        // Message Package
        const message = {
            clientName,
            email,
            subject,
            phoneNumber
        }

        // Post to Message to DB
        fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Message send successfully');
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="hero bg-cyan-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-2xl text-black/70 font-bold">Fell free to share your words with me about my tutorials or myself.</h1>
                <p className="text-black/70 py-6">Call me if needed on 01710444700 or simply contact me below.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-cyan-200">
                <form onSubmit={handleMessage} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black/70">Name</span>
                    </label>
                    <input name='clientName' type="name" placeholder="Your name here" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black/70">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black/70">Subject</span>
                    </label>
                    <input name='subject' type="subject" placeholder="Your subject here" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black/70">Mobile Number</span>
                    </label>
                    <input name='phoneNumber' type="tel" placeholder="Your mobile number" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-warning" type='submit' value='Send' input/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Message;