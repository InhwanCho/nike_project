import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef, useState, useEffect, useCallback } from "react";
import { SlideCardProps } from "./type/type";

export default function SlideCard({ title, items }: SlideCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(items.length <= 1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isThrottled = useRef<boolean>(false);

  // 뷰포트의 너비에 따라 카드 너비를 결정하는 로직을 추가.
  const getCardWidthInVW = () => {
    const vpWidth = window.innerWidth;
    return vpWidth < 1024 ? 60 : 27;
  };
  const [cardWidthInVW, setCardWidthInVW] = useState(getCardWidthInVW()); // 초기 상태는 window.innerWidth를 바탕으로 계산합니다.

  const checkBoundary = useCallback(() => {
    if (containerRef.current) {
      const maxScrollLeft =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;
      setDisablePrev(containerRef.current.scrollLeft <= 0);
      setDisableNext(containerRef.current.scrollLeft >= maxScrollLeft);
    }
  }, []);
  // 화면 크기가 변경될 때 cardWidthInVW를 업데이트합니다.
  useEffect(() => {
    function updateSize() {
      setCardWidthInVW(getCardWidthInVW());
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    const maxScrollWidth = containerRef.current.scrollWidth - viewportWidth;
    setDisablePrev(currentIndex <= 0);
    setDisableNext(currentIndex >= maxScrollWidth);
  }, [currentIndex, items.length]);

  const scrollToCurrentIndex = useCallback(() => {
    if (containerRef.current) {
      const cardWidth = window.innerWidth * (cardWidthInVW / 100);
      containerRef.current.scroll({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
      containerRef.current.style.pointerEvents = "none";
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.pointerEvents = "";
        }
        checkBoundary();
        isThrottled.current = false;
      }, 300); // This should match the scroll behavior's smooth duration
    }
  }, [currentIndex, cardWidthInVW, checkBoundary]);

  useEffect(scrollToCurrentIndex, [scrollToCurrentIndex]);

  const handleNext = () => {
    if (!disableNext && !isThrottled.current) {
      isThrottled.current = true;
      setCurrentIndex((prevIndex) => {
        const viewportWidth = window.innerWidth;
        const newOffset = viewportWidth * 0.4;
        const maxIndex = (containerRef.current.scrollWidth / viewportWidth) - 1;
        let nextIndex = prevIndex / viewportWidth + newOffset / viewportWidth;
        nextIndex = Math.min(nextIndex, maxIndex);
        return nextIndex * viewportWidth;
      });
    }
  };

  const handlePrev = () => {
    if (!disablePrev && !isThrottled.current) {
      isThrottled.current = true;
      setCurrentIndex((prevIndex) => {
        const viewportWidth = window.innerWidth;
        const newOffset = viewportWidth * 0.4;
        let nextIndex = prevIndex / viewportWidth - newOffset / viewportWidth;
        nextIndex = Math.max(nextIndex, 0);
        return nextIndex * viewportWidth;
      });
    }
  };
  
  useEffect(() => {
    checkBoundary();
  }, [currentIndex, items.length]);

  return (
    <>
      <div className="mt-20">
        <div className="grid grid-cols-2 ml-14 mb-10">
          <h2 className="font-medium text-2xl">{title}</h2>
          <div className="flex justify-end gap-3">
            <MdKeyboardArrowLeft
              className={`p-1 w-12 h-12 rounded-full bg-gray-100 ${
                disablePrev ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handlePrev}
              disabled={disablePrev}
            />
            <MdKeyboardArrowRight
              className={`p-1 w-12 h-12 mr-8 rounded-full bg-gray-100 ${
                disableNext ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handleNext}
              disabled={disableNext}
            />
          </div>
        </div>

        <div
          ref={containerRef}
          className="ml-10 overflow-auto whitespace-nowrap"
          onScroll={checkBoundary}
        >
          {items.map((data, index) => (
            <a href="">
              <div
                key={index}
                className={`inline-block mx-3 align-top`}
                style={{
                  width: `${cardWidthInVW}vw`,
                  minWidth: `${cardWidthInVW}vw`,
                }}
              >
                <img
                  draggable={true}
                  src={data.url}
                  alt={data.title}
                  className={`w-full object-cover ${
                    data.price ? "h-[22rem]" : "h-[25rem]"
                  }`}
                />
                <div className="py-3 h-[7rem] flex flex-col justify-center whitespace-normal">
                  <h3
                    className={`${
                      data.price ? "font-normal text-lg" : "font-medium text-xl"
                    } text-gray-800  text-center sm:text-left`}
                  >
                    {data.title}
                  </h3>
                  <p
                    className={`${
                      data.price
                        ? "text-gray-500 py-1 pb-2"
                        : "text-gray-600 py-2"
                    } text-gray-600 text-center sm:text-left `}
                  >
                    {data.content}
                  </p></div>
                    <div>
                  {data.newPrice ? (
                    <>
                      <p className="line-through text-gray-400">
                        {data.price.toLocaleString()} 원
                      </p>
                      <p className="font-semibold pb-3">{data.newPrice.toLocaleString()} 원</p>
                    </>
                  ) : (
                    data.price && <p className="font-semibold">{data.price.toLocaleString()} 원</p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
