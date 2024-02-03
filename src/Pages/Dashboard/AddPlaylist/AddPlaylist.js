import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddPlaylist = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const {user} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddPlaylist = data =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                // Create playlist Object
                const playlist = {
                    title: data.title,
                    link: data.link,
                    img: imgData.data.url
                }

                // Post playlist to the Db
                fetch('http://localhost:5000/playlist', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(playlist)
                })
                .then(res => res.json())
                .then(result =>{
                    if(result.acknowledged){
                        toast.success(`Your playlist ${data.title} is added successfully`);
                        // navigate('/dashboard/playlist');
                    }
                })
            }
        })
    }
    return (
        <section className='m-4'>
            <h2 className='text-2xl text-neutral font-medium mb-4'>Add Playlist</h2>
            <div className='w-screen p-5 card shadow-xl'>
                <form onSubmit={handleSubmit(handleAddPlaylist)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" 
                        {...register("title", {required:"Title is required"})} 
                        placeholder="Title" className="input input-bordered input-primary text-neutral w-full max-w-screen-md"/>
                        {errors.title && <p className='text-red-600'>{errors.title?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Playlist Link</span>
                        </label>
                        <input type="text" 
                        {...register("link", {required:"Playlist Link is required"})} 
                        placeholder="Playlist Link" className="input input-bordered input-primary text-neutral w-full max-w-screen-md"/>
                        {errors.link && <p className='text-red-600'>{errors.link?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Thumbnail Image</span>
                        </label>
                        <input type="file" 
                        {...register("image", {required:"Thumbnail Image is required"})} 
                        className="input input-bordered input-primary text-neutral w-full max-w-screen-md"/>
                        {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                    </div>
                    <input className='btn btn-secondary max-w-screen-md text-base-100 mt-4' value='Add Product' type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddPlaylist;