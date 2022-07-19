import React from "react";
import { roadmapData, roadmapSubtitle } from "../../locale/localeData";
// import "./css/roadMap.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const dateDesc = {
  ko_value: "*본 사이트의 날짜와 시간은 모두 UTC 기준입니다.\n",
  en_value: "*All Date & Time announced on the site are based on UTC.\n",
};

const RoadMap = () => {
  return (
    <section className="road-map">
      <div className="road-map-inner">
        <h2 className="tit2">Roadmap</h2>
        <p className="txt">{roadmapSubtitle.subTitle.en_value}</p>
        <Swiper
          className="wrapper"
          spaceBetween={24}
          grabCursor={true}
          initialSlide={5}
          modules={[Navigation]}
          navigation={{
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          }}
          breakpoints={{
            540: {
              slidesPerView: 2.3,
              navigation: false,
              touchRatio: 1,
              allowTouchMove: true,
              spaceBetween: 16,
            },
            900: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
        >
          {roadmapData.map((data, key) => {
            return (
              <SwiperSlide
                className={
                  "wrap" + data.status === "disabled"
                    ? "disabled"
                    : data.status === "active"
                    ? "active"
                    : ""
                }
                key={data.id}
              >
                <article
                  className={
                    "list" + data.status === "disabled"
                      ? "disabled"
                      : data.status === "active"
                      ? "active"
                      : "" + data.className === "alignCenter"
                      ? "alignCenter"
                      : "wrap" + data.class === "fontSize" && "fontSize"
                  }
                >
                  <h3 className="title">{data.title.en_value}</h3>
                  <p
                    className={"text" + data.class === "fontSize" && "fontSize"}
                  >
                    {data.content.en_value}
                  </p>
                  <span className="date">{data.date}</span>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p className="dateDesc">{dateDesc.en_value}</p>
      </div>
    </section>
  );
};

export default RoadMap;
