import React, { Component } from 'react';
import Image from "../../images/Carcassonne_Abadia__Alcalde_banner.jpg";
import GameCard from "../GameCard/GameCard";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import LateralCarousel from "../Carousel/LateralCarousel";

let description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
let items = [{
  title: "some Game",
  description: description,
  image: Image
},{
  title: "some Game",
  description: description,
  image: Image
},{
  title: "some Game",
  description: description,
  image: Image
},{
  title: "some Game",
  description: description,
  image: Image
},{
  title: "some Game",
  description: description,
  image: Image
}];

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="container  home">
            <LateralCarousel title="Popular Items" items={items} itemQty={6}/>
        </div>
        {/* <div style={{width: "300px"}}>

          <GameCard title="Carcassone" image={Image} description={description} price={1900}/>        
        </div> */}
      </div>
    );
  }
}

export default Home;