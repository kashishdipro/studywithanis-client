import React from 'react';

const SubscriberRow = ({subscriber, idx}) => {
    const{email} = subscriber;
    console.log(subscriber);
    return (
        <tr>
            <th>{idx+1}</th>
            <td className="text-sm opacity-50">{email}</td>
        </tr>
    );
};

export default SubscriberRow;