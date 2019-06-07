import React, { Component } from 'react'
import Carousel from '../Carousel/HomeCarousel'
import NavBar from '../NavBar/NavBar'

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Carousel/>
      </div>
    )
  }
}
