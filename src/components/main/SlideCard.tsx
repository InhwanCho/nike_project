import { Swiper, SwiperSlide } from "swiper/react";
import "./css/swiper.css";
import "swiper/css";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GiftProps } from "../../type/type";

interface SlideCardProps{
  title:string;
  items:GiftProps[];
  number:number;
}

export default function SlideCard({ title, items, number }:SlideCardProps) {
  const prevBtn = "leftarrow-" + number;
  const nextBtn = "rightarrow-" + number;
  return (
    <>
      <div className="mt-10 sm:mt-20">
        <div className="grid grid-cols-2 ml-5 sm:ml-14 mb-10">
          <h2 className="font-medium text-2xl">{title}</h2>
          <div className="flex justify-end gap-3">
            <MdKeyboardArrowLeft
              className={`p-1 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-300/80 cursor-pointer ${prevBtn}`}
            />
            <MdKeyboardArrowRight
              className={`p-1 w-12 h-12 mr-8 rounded-full bg-gray-100 hover:bg-gray-300/80 cursor-pointer ${nextBtn}`}
            />
          </div>
        </div>
        <div className="ml-5 sm:ml-14 overflow-auto">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            navigation={{
              prevEl: "." + prevBtn,
              nextEl: "." + nextBtn,
            }}
            watchOverflow={true}
            mousewheel={true}
            keyboard={true}
            cssMode={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="w-[95%] sm:w-full"
            breakpoints={{
              // 화면 크기에따라 반응형 perView
              0: {
                slidesPerView: 1
              },
              640:{
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
              },
              960: {
                slidesPerView: 3.2,
              },
            }}
          >
            {items.map((data, index : number) => (
              <SwiperSlide key={index}>
                <div className={`inline-block`}>
                  <img
                    draggable={true}
                    src={data.url}
                    alt={data.title}
                    className={`w-full ${
                      data.price ? "apparel-img" : "gift-img"
                    }`}
                  />
                  <div className="py-3 flex flex-col  whitespace-normal">
                    <h3
                      className={`${
                        data.price
                          ? "font-normal text-lg"
                          : "font-medium text-xl"
                      } text-gray-800 sm:text-left`}
                    >
                      {data.title}
                    </h3>
                    <p
                      className={`${
                        data.price
                          ? "text-gray-500 py-1 pb-2"
                          : "text-gray-600 py-2"
                      } text-gray-600 text-base sm:text-left `}
                    >
                      {data.content}
                    </p>
                  </div>
                  <div className="text-center sm:text-left">
                    {data.newPrice ? (
                      <>
                        <p className="line-through text-gray-400">
                          {data.price?.toLocaleString()} 원
                        </p>
                        <p className="font-semibold pb-3">
                          {data.newPrice.toLocaleString()} 원
                        </p>
                      </>
                    ) : (
                      data.price && (
                        <p className="font-semibold">
                          {data.price.toLocaleString()} 원
                        </p>
                      )
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
