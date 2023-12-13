// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./css/swiper.css";
// Import Swiper styles
import "swiper/css";
import { data3 } from "../../assets/data";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Test() {
  return (
    <>
      <div className="relative">
        <div className="ml-10 mb-10">
          <h3 className="font-bold text-3xl">Always Iconic</h3>
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
          >
            {data3.map((item, i) => (
              <SwiperSlide>
                <img src={item.url} alt="" key={i} />
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
