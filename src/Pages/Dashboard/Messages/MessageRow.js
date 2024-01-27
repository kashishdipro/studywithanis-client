import React from 'react';

const MessageRow = ({message, idx}) => {
    const{clientName, email, subject, phoneNumber, clientmessage} = message;
    return (
        <tr>
            <th>{idx+1}</th>
            <td className="text-sm opacity-50">{clientName}</td>
            <td className="text-sm opacity-50">{email}</td>
            <td className="text-sm opacity-50">{subject}</td>
            <td className="text-sm opacity-50">{phoneNumber}</td>
            <td className="text-sm opacity-50">{clientmessage}</td>
        </tr>
    );
};

export default MessageRow;