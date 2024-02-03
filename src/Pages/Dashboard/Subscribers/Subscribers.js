import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import SubscriberRow from './SubscriberRow';

const Subscribers = () => {
    const {user} = useContext(AuthContext);

    const {data: subscribers = []} = useQuery({
        queryKey: ['subscribers'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/subscribers');
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    return (
        <section className='m-4'>
            {
                subscribers?.length !== 0 ?
                <>
                <h2 className='text-2xl text-neutral font-medium mb-4'>Messages</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subscribers?.map((subscriber, idx) =><SubscriberRow
                                key={subscriber._id}
                                idx={idx}
                                subscriber={subscriber}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
                </>
                :
                <div className='flex items-center justify-center'>
                    <h2 className='text-red-500 md:text-2xl text-xl font-bold'>No Subscriber Found</h2>
                </div>
            }
            
        </section>
    );
};

export default Subscribers;