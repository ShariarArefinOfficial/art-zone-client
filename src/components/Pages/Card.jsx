//import React from 'react';

const Card = ({prop}) => {
    const {photo}=prop
    return (
        <div>
            <img src={photo} alt="" className="container mx-auto" />
        </div>
    );
};

export default Card;