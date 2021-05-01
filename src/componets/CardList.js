import React from 'react';
import Card from './Card';

const CardList = ({ Robots, props }) => {
    const cardComponent = Robots.map((user, index) => {
        return <Card key={index} id={Robots[index].id} name={Robots[index].name} email={Robots[index].email}></Card>
    });
    if (cardComponent.length === 0) {
        return <h1 className="notFound main-header white">No ROBOS FOUND ....</h1>
    }
    else {
        return (
            <div>
                {cardComponent}
            </div>
        )
    }
}
export default CardList