import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper-bundle.css";
import jackiChan from "../images/jackiChan.jpg";
import Bruce from "../images/Bruce_Lee.jpg";
import Jonson from "../images/jonsonStatham.jpg";
import theRock from "../images/theRock.jpg";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Container = styled.div`
  margin: 100px auto;
  .swiperSlide {
    text-align: center;
    border-radius: 20px;
    padding: 20px;
    width: 500px;
    height: 200px;
    margin: auto;
    background-color: white;
  }
  img {
    width: 10%;
    border-radius: 100%;
    display: block;
    margin: 10px auto;
  }
`;
class Quote extends Component {
  render() {
    return (
      <Container>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiperSlide ">
              <img src={jackiChan} alt="jackiChan" />
              <q>The only way to prove that you’re a good sport is to lose.</q>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlide">
              <img src={Bruce} alt="Bruce" />
              <q>
                I’ve failed over and over again in my life. And that is why I
                succeed.
              </q>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlide">
              <img src={Jonson} alt="Jonson" />
              <q>Age is no barrier. It’s a limitation you put on your mind.</q>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlide">
              <img src={theRock} alt="theRock" />
              <q>
                I always felt that my greatest asset was not my physical
                ability, it was my mental ability.
              </q>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    );
  }
}

export default Quote;
