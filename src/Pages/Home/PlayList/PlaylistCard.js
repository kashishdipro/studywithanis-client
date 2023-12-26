import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistCard = ({list}) => {
    const{img, title, link} = list;
    return (
        // <div className="card card-compact w-30 md:w-40 lg:w-72 mx-2 bg-base-100 shadow-xl">
        //     <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Shoes!</h2>
        //     </div>
        // </div>
        <div className="flex flex-auto rounded-xl m-2 bg-base-100 shadow-xl">
            <Link to={link}>
                <div className='grid col-auto'>
                    <figure><img className='w-screen' src={img} alt="Shoes" /></figure>
                    <div className="my-4">
                        <h2 className="text-center text-lg font-semibold">{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PlaylistCard;