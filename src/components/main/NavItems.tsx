import {
  HiMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoReorderThreeOutline } from "react-icons/io5";
import { NavItem2Props } from "./type/type";

export function NavItem2({searchBtn, setSearchBtn}:NavItem2Props) {
  
  return (
    <>
      {searchBtn ? (
        <>
        <div className="relative search-div">
          <input
            type="text"
            className="outline-none pt-3 pl-10 py-2 border rounded-full bg-gray-100 w-[80vw] lg:w-[67vw]"
            placeholder="검색"
          />
          <HiMagnifyingGlass
            className={`nav-icons ${searchBtn && 'search-box2'}`}
            onClick={() => {
              setSearchBtn(!searchBtn);
            }}
          />
        </div>
        <div className="mr-12">
          <button className="font-normal" onClick={(()=>{setSearchBtn(!searchBtn)})}>취소</button>
        </div>
        </>
      ): (
        <>
        <div
        className="hidden pl-60 font-medium items-center gap-6 
           lg:flex overflow-x-auto"
      >
        <a href="" className="whitespace-nowrap	">
          New Releases
        </a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">Kids</a>
        <a href="" className="text-ellipsis overflow-hidden">
          Sale
        </a>
      </div>
      <div className="items-center gap-3 flex mr-6">
        <div className="relative inline-block">
          <input
            type="text"
            className="outline-none hidden lg:flex pt-3 pl-10 py-2 max-w-[11rem] border rounded-full bg-gray-100"
            placeholder="검색"
          />
          <HiMagnifyingGlass
            className="nav-icons search-box items-center"
            onClick={() => {
              setSearchBtn(!searchBtn);
            }}
          />
        </div>
        <div className="flex gap-3">
          <HiOutlineHeart className="nav-icons" />
          <HiOutlineShoppingCart className="nav-icons" />
          <IoReorderThreeOutline className="lg:hidden nav-icons" />
        </div>
      </div>
      </>
      ) }
      
      {searchBtn && (
        <div className="flex w-full absolute top-full left-0 bg-white">
          <div className="detail-search">
            <h5>인기 검색어</h5>
            <p>Air Force 1</p>
            <p>Jordan</p>
            <p>Air Max</p>
            <p>Climbing Shoes</p>
          </div>
        </div>
      )}
    </>
  );
}

export function NavItem3() {
  return (
    <div className="bg-gray-100 justify-center text-center border-t py-2">
      <p>이용약관 개정 안내</p>
      <a href="" className="text-xs underline">
        자세히 보기
      </a>
    </div>
  );
}
