import { Swiper, SwiperSlide } from 'swiper/react';
import "./css/swiper.css";
import "swiper/css";
import { data3 } from "../../assets/data";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Iconic({title}) {

  return (
    <>
      <div className="relative mt-20">
        <div className="ml-14 mb-10">
          <h3 className="font-medium text-2xl">{title}</h3>
        </div>
        <div className="bg-repeat-x">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            slidesPerView={4}
            spaceBetween={40}
            centeredSlides={true}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="h-[360px] w-full my-swiper"
            breakpoints={{
              // 화면 크기에따라 반응형 perView
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              960: {
                slidesPerView: 4,
              },
            }}
          >
            {data3.map((item, i) => (
              <SwiperSlide key={i}>
                <img src={item.url} alt="" />
                <p className="text-gray-500 text-base text-left pt-5">
                  {item.title}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}