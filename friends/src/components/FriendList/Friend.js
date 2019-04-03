import React from 'react';
import './Friend.css';

export default function Friend({friend}) {
    console.log(friend);
    return (
        <div className="friend-wrapper">
            <p>{friend.id}</p>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    );
}