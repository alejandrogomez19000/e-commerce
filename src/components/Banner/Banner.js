import React, { Component } from 'react'
import BannerImg from "../../images/pathfinder.jpg";
import "./Banner.scss";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner-image">
        <img src={BannerImg} alt="pathfinder"/>
      </div>
    )
  }
}
