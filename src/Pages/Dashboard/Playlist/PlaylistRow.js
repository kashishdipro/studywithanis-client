import React from 'react';

const PlaylistRow = ({list, idx}) => {
    const {img, title, link, _id} = list;
    return (
        <tr>
            <th>{idx+1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={list.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{list.title}</div>
                    <div className="text-sm opacity-50">{list.link}</div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default PlaylistRow;