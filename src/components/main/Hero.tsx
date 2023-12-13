

export default function Hero() {
  return (
    <>
      <div>
        <div className="justify-center flex">
          <img src="/img/3.jpg" alt="img" className="lg:h-[35rem]" />          
        </div>
        <div className="mt-14 text-center font-extrabold text-5xl">
            <h1>우리를 움직이게 하는 선물</h1>
            <div className="text-lg mt-8 font-[320]">
              <p>오늘의 감동이 내일의 움직임으로 이어지도록,</p>
              <p>나와 소중한 이들에게 선물 그 이상을 전해보세요.</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-1">
            <a className="rounded-full border p-3 px-4 bg-black text-white hover:bg-gray-600">자세히 보기</a>
            <a className="rounded-full border p-3 px-4 bg-black text-white hover:bg-gray-600" >기프트 컬렉션 구매하기</a>
          </div>
      </div>
    </>
  );
}
