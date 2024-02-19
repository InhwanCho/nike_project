import {
  HiMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoReorderThreeOutline } from "react-icons/io5";
import { NavItem2Props } from "../../type/type";
import { useNavigate } from "react-router-dom";
import { setInputText, activeButton, RootState } from "../../store/store.ts";
import { useDispatch, useSelector } from "react-redux";
import React from 'react';

export function NavItem2({ searchBtn, setSearchBtn }: NavItem2Props) {
  const InputText = useSelector((state:RootState) => state.changeInput.message);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeEnter = (e:React.KeyboardEvent) => {
    if (e.key === "Enter") {
      dispatch(activeButton());
      navigate("/shop");
    }
  };

  return (
    <>
      {searchBtn ? (
        <>
          <div className="relative search-div">
            <input
              minLength={2}
              maxLength={20}
              type="text"
              value={InputText}
              className="outline-none pt-3 pl-10 py-2 border rounded-full bg-gray-100 w-[80vw] lg:w-[67vw]"
              placeholder="검색"
              onChange={(e) => dispatch(setInputText(e.target.value))}
              onKeyDown={(e) => activeEnter(e)}
            />
            <HiMagnifyingGlass
              className={`nav-icons ${searchBtn && "search-box2"}`}
              onClick={() => {
                setSearchBtn(!searchBtn);
              }}
            />
          </div>

          <div className="mr-12">
            <button
              className="font-normal"
              onClick={() => {
                setSearchBtn(!searchBtn);
              }}
            >
              취소
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            className="hidden pl-60  font-medium items-center gap-6 
           lg:flex overflow-x-auto"
          >
            <a href="/shop" className="whitespace-nowrap	">
              New Releases
            </a>
            <a href="/shop">Men</a>
            <a href="/shop">Women</a>
            <a href="/shop">Kids</a>
            <a href="/shop" className="text-ellipsis overflow-hidden">
              Sale
            </a>
          </div>
          <div className="items-center gap-3 flex mr-2 sm:mr-6">
            <div className="relative inline-block">
              <input
                minLength={2}
                maxLength={20}
                type="text"
                className="outline-none hidden lg:flex pt-3 pl-10 py-2 max-w-[11rem] border rounded-full bg-gray-100"
                placeholder="검색"
                value={InputText}
                onChange={(e) => dispatch(setInputText(e.target.value))}
                onKeyDown={(e) => activeEnter(e)}
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
      )}

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
    <div className="bg-gray-100 flex sm:block justify-center items-center gap-4 text-center border-t py-2">
      <p>이용약관 개정 안내</p>
      <a href="" className="text-xs underline">
        자세히 보기
      </a>
    </div>
  );
}
