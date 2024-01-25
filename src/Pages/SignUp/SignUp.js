import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from 'react-hot-toast';
const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // SignIn Package
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            toast.success('User Created Successfully!');
            console.log(user);
        })
        .catch(err =>console.error(err));
    }
    return (
        <div className="hero min-h-screen bg-cyan-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl py-4 bg-cyan-200">                
                    <h1 className="text-2xl py-4 text-center text-black/70 font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body py-2">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black/70">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type='submit' value='Sign Up' input/>
                        </div>
                    </form>
                    <p className='flex justify-around text-center'>Admin <Link to='/signin' className='text-pink-400 font-bold'>Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;