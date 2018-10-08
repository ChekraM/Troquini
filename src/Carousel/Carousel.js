import React, { Component } from "react";
import "./Carousel.css";

import {
  Carousel,
  CarouselInner,
  CarouselItem,
  View,
  Mask,
  Container
} from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Container className="container-carousel">
        <Carousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={false}
          className="z-depth-1"
        >
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img
                  className="d-block w-100"
                  src="/troquini.png"
                  alt="First slide"
                />
                <Mask overlay="black-light" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img
                  className="d-block w-100"
                  src="/troc.png"
                  alt="Second slide"
                />
                <Mask overlay="black-strong" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img
                  className="d-block w-100"
                  src="/LE TROC (1).png"
                  alt="Third slide"
                />
                <Mask overlay="black-slight" />
              </View>
            </CarouselItem>
            <div className="back-gray" />
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage;
