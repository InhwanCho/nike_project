import { useState } from "react";
import "../css/title.css";
import { BsFilter } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { filterItems } from "../../../assets/data";

interface TitleProps{
  filter: boolean|undefined;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Title({ filter, setFilter }:TitleProps) {
  const [rename, setRename] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const [sort, setSort] = useState('')
  return (
    <>
      <div className="hidden lg:flex sticky bg-white top-0 p-6 px-11 items-center justify-between">
        <div className="items-center">
          <h2 className="text-2xl font-medium">신제품 (3)</h2></div>
        <div className="flex gap-7">
          <div
            onClick={() => {
              setFilter(!filter);
              setRename(!rename);
            }}
            className="flex gap-2 cursor-pointer select-none	"
          >
            필터 {rename ? "열기" : "숨기기"}
            <BsFilter className="w-6 h-6" />
          </div>
          <div
            onClick={() => {
              setChangeIcon(!changeIcon);
            }}
            className="flex relative gap-2 cursor-pointer select-none "
          >
            정렬 기준: <p className="text-gray-900/60">{sort}</p>
            {changeIcon ? (
              <>
                <FaAngleUp className="w-6 h-6" />
                <div className="z-10 w-full absolute top-11 left-1 p-4 pr-8 bg-white rounded-bl-2xl whitespace-nowrap">
                  <p className="hover:text-gray-900/60" onClick={()=>{setSort('추천순')}}>추천순</p>
                  <p className="hover:text-gray-900/60" onClick={()=>{setSort('가격 높은 순')}}>가격 높은 순</p>
                  <p className="hover:text-gray-900/60" onClick={()=>{setSort('가격 낮은 순')}}>가격 낮은 순</p>
                </div>

              </>
            ) : (
              <FaAngleDown className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>

      <div className="pt-8 pb-5 lg:hidden">
        <div className="mb-6 pl-5">
          <h3 className="font-semibold text-xl">신상품</h3>
        </div>
        <div>
          <ul className="flex p-5 gap-7 border-b pb-3 text-lg cursor-pointer">
          {filterItems.map((item,i)=>(
                <p key={i} className="font-medium">{item.title}</p>
              ))}
          </ul>
        </div>
        <div className="flex p-5 gap-7 justify-between">
          <div className="text-gray-900/60">3개의 결과</div>
          <div className="flex gap-2 p-1 px-3 rounded-full border hover:bg-gray-50 hover:border-black">
            필터
            <BsFilter className="w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
}

<div className="flex justify-between">
  <div className="">prevBtn</div>
  <div className="relative">
    SortBtn
    <div className="absolute top-10 bg-white">
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>
  </div>
</div>;
