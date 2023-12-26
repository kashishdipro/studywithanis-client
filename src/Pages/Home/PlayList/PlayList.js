import React, { useEffect, useState } from 'react';
import midbanner from '../../../img/midbanner.jpg';
import PlaylistCard from './PlaylistCard';

const PlayList = () => {
    const [playlist, setPlaylist] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/playlist')
        .then(res => res.json())
        .then(data => setPlaylist(data))
    },[])
    return (
        <div className="min-h-screen bg-green-300">
            <div className='py-10'>
                <div className="hero-content text-center h-full w-screen relative mb-4">
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
                
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            playlist.map(list =><PlaylistCard
                                key={list._id}
                                list={list}
                                ></PlaylistCard>)
                        }
                </div>
            </div>
        </div>
    );
};

export default PlayList;