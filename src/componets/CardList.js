import React from 'react';
import Card from './Card';

const CardList = ({ Robots }) => {

    const cardComponent = Robots.map((user, index) => {
        return <Card key={index} id={Robots[index].id} name={Robots[index].name} email={Robots[index].email}></Card>
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}
export default CardList