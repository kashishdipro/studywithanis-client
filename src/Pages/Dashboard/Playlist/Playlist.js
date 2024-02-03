import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import PlaylistRow from './PlaylistRow';

const Playlist = () => {
    const {user} = useContext(AuthContext);

    const {data: playlist = []} = useQuery({
        queryKey: ['playlist'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/playlist');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='m-4'>
            {
                playlist?.length !== 0 ?
                <>
                <h2 className='text-2xl text-neutral font-medium mb-4'>Playlist</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                playlist?.map((list, idx) =><PlaylistRow
                                key={list._id}
                                idx={idx}
                                list={list}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
                </>
                :
                <div className='flex items-center justify-center'>
                    <h2 className='text-red-500 md:text-2xl text-xl font-bold'>No Playlist Found</h2>
                </div>
            }
            
        </section>
    );
};

export default Playlist;