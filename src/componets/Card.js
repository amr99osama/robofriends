import React from 'react';

const Card = (props) => {
    const { id, name, email } = props
    return (
        <div style={{ fontFamily: 'helvetica' }} className='sans-serif bg-green mr3 ml3 dib b--solid grow shadow-5 ma2 pa2'>
            <img alt='amr' className='center tc db' src={`https://robohash.org/${id}`} width='200' height='200' />
            <div className="center tc">
                <h2 style={{ color: 'white' }}>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;