"use client";
import Card, { CardProps } from "@/components/Card";
import SectionLabel from "./SectionLabel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Projects = ({ projects }: { projects: CardProps[] }) => {
  return (
    <>
      <SectionLabel>Latest Projects</SectionLabel>
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={300}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        id="projects"
        className="py-12 md:py-16"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Card {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Projects;
