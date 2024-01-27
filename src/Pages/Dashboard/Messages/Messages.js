import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import MessageRow from './MessageRow';

const Messages = () => {
    const {user} = useContext(AuthContext);

    const {data: messages = []} = useQuery({
        queryKey: ['messages'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/messages');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='m-4'>
            {
                messages?.length !== 0 ?
                <>
                <h2 className='text-2xl text-neutral font-medium mb-4'>Messages</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Subject</th>
                                <th>Phone</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                messages?.map((message, idx) =><MessageRow
                                key={message._id}
                                idx={idx}
                                message={message}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
                </>
                :
                <div className='flex items-center justify-center'>
                    <h2 className='text-red-500 md:text-2xl text-xl font-bold'>No Message Found</h2>
                </div>
            }
            
        </section>
    );
};

export default Messages;