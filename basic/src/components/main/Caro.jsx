import React from "react";
import { Carousel } from "react-bootstrap";
/* import ExampleCarouselImage from "components/ExampleCarouselImage"; */

const Caro = () => {
  return (
    <div>
      {/*     <Carousel fade>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "50vh" }}
            src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/6883018551140974566.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>식욕 돋는 가을에도 가벼워요</h3>
            <p>최대 30% 할인</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel fade>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "50vh" }}
            src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/2300464335791787914.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>프리미엄도 블랙프라이데이</h3>
            <p>최대 30% 할인</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "50vh" }}
            src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/3639582332837492395.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>포근한 가을밤 만들어 드려요</h3>
            <p>꿀잠 아이템 최대 32%할인</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "50vh" }}
            src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/6883018551140974566.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>식욕 돋는 가을에도 가벼워요</h3>
            <p>최대 30% 할인</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "50vh" }}
            src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/2300464335791787914.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>프리미엄도 블랙프라이데이</h3>
            <p>최대 30% 할인</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caro;
