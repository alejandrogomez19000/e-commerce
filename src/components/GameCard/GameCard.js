import React, { Component } from 'react';
import "./GameCard.scss";

const GameCard = ({title, image , description , price}) => {

    const renderDescription = () =>{
      if(description.length > 150){
        return (
          <div className="description">
            {description.substring(0, 150)}
            <span>..leer mas</span>
          </div>
        )
      } else {
        return <div className="description">{description}</div>
      }
    }

    return (
      <div className="game-card">
        <div className="game-card-header">
          <img className="header-image" src={image} alt={title}/>
        </div>
        <div className="game-card-body">
          <div className="title">
            {title}
          </div>
          <div className="description">
            {
             renderDescription()
            }
          </div>
        </div>
        <div className="game-card-footer">
          <div className="price">
              $ {price}
          </div>
        </div>
      </div>
    );
}

export default GameCard;