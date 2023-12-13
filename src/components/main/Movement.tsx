export default function Movement({title}) {
  return (
    <div className="mt-20 mx-12">
      <div className="flex justify-center">
        <img src='/image-5.jpg' alt="img" className="h-[45vw] w-full"/>
      </div>
      <div>
        <div className="text-center my-10">
          <p className="mb-4 font-medium">에어맥스 펄스 롬</p>
          <h2 className="text-5xl font-extrabold">{title}</h2>
          <p className="my-7">도심에서 펼쳐질 그 어떤 상황에서도 편안하도록.<br/> 언제 어디서든 새로워진 에어맥스 펄스롬으로부터 아침부터 밤까지 자유를 경험해보세요.</p>
          <button className="bg-black text-white rounded-full px-4 py-3">구매하기</button>
        </div>
      </div>
    </div>
  )
}
