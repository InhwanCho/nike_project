import { useState } from "react"
import '../css/title.css'
export default function Title() {
  const [filter, setFilter] = useState(false)
  const [sort, setSort] = useState(false)
  return (
<>
    <div className="flex p-6 px-11 items-center justify-between shop-title-hidden">
      <div>신제품 (3)</div>
      <div className="flex gap-7">
        <div>필터 숨기기</div>
        <div>정렬 기준: </div>
      </div>
    </div>
    <div className="pt-8 pb-5 lg:hidden">
      <div className="mb-6 pl-5"><h3>신제품</h3></div>
      <div>
        <ul className="flex p-5 gap-7 border-b pb-3">
          <li>신발</li>
          <li>탑 & 티셔츠</li>
          <li>후디 & 크루</li>
          <li>재킷 & 베스트</li>
        </ul>
      </div>
      <div className="flex p-5 gap-7 justify-between">
        <div>3개의 결과</div>
        <div>필터</div>
      </div>
    </div>
    
    </>
  )
}
