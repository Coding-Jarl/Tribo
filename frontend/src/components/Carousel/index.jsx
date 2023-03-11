import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
import { Link } from "react-router-dom";
import Styled from "./style";

const slides = [
  {
    id: 1,
    title: "Hey!",
    linkDestination: "/",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum vel minus dolore libero illum a nulla alias iusto incidunt tenetur consequatur itaque labore inventore, tempora fugit iure quisquam! Exercitationem!",
  },
  {
    id: 1,
    title: "Hey!",
    linkDestination: "/",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum vel minus dolore libero illum a nulla alias iusto incidunt tenetur consequatur itaque labore inventore, tempora fugit iure quisquam! Exercitationem!",
  },
];

export default function SandBox() {
  return (
    <Styled>
      <Swiper className="myCarousel">
        {slides.map((slide) => {
          return (
            <SwiperSlide className="mySlide" key={slide.id}>
              <Link to={slide.linkDestination}>
                <div className="content">
                  <h2>{slide.title}</h2>
                  <p>{slide.content}</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Styled>
  );
}
