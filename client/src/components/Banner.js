import React from "react"
import bannerImg1 from "../assets/dentist1.jpg"
import bannerImg2 from "../assets/dentist2.jpg"
import bannerImg3 from "../assets/dentist3.jpg"
import Carousel from 'react-bootstrap/Carousel'

export const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="banner w-100"
          src={bannerImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to Coding Finesse!</h3>
          <p>A technical blog for Linux enthuasiasts and aspiring programmers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner w-100"
          src={bannerImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Looking for a reliable source of technical knowledge?</h3>
          <p>Look no more! A website dedicated to delivering the vast amount of available information into easily digestible bites.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner w-100"
          src={bannerImg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Want to connect?</h3>
          <p>Send me a message using the contact form or email me at darrenptran@gmail.com.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}