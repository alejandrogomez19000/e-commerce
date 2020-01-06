import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

const LateralCarousel = ({title , items , itemQty}) => {
    const renderItems = () => {
      console.log(items)
      return (items.map((v,k) => {
        return <div key={k} className="item carousel-item">
          <div className="image-container">
            <img src={v.image} alt={v.title}/>
          </div>
          <div className="item-information">
            <h3 className="title">{v.title}</h3>
            <p className="description">
              {v.description.substring(0 , 40) + "...leer mas"}  
            </p>   
          </div> 
        </div>
      }))
    }

    return (
      <div className="lateral-carousel">
           <OwlCarousel items={itemQty} nav={false} dots={false} >
              { renderItems() }
            </OwlCarousel>
      </div>
    )
}

export default LateralCarousel;