import { useEffect, useState } from "react";
import "./css/nav.css";
import { SiNike, SiJordan, SiHere } from "react-icons/si";
import { throttleHelper } from "./utils/throttleHelper";
import { NavItem2, NavItem3 } from "./NavItems";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [searchBtn, setSearchBtn] = useState(false);

  const handleScroll = throttleHelper(() => {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    setIsVisible(isScrollingUp || currentScrollPos < 10); 
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isVisible, handleScroll]);

  return (
    <>
      <nav className="top-0 z-20 inset-0">
        <div className="hidden grid-cols-2 pl-5 p-2 border-b bg-gray-100 lg:grid">
          <div className="flex gap-5 pl-5 items-center">
            <div>
              <SiJordan
                onClick={() => {
                  navigate("/");
                }}
                className="w-5 h-5 hover:text-gray-500 cursor-pointer"
              />
            </div>
            <SiHere
              onClick={() => {
                navigate("/");
              }}
              className="w-5 h-5 hover:text-gray-500 cursor-pointer"
            />
          </div>
          <div className="flex justify-end items-center text-xs gap-3 pr-8">
            <p>매장 찾기</p>|<p>고객센터</p>|<p>가입하기</p>|<p>로그인</p>
          </div>
        </div>
      </nav>
      <header
        className={`bg-white w-full justify-between
        sticky z-10 top-0 transition-top duration-300 p-2 flex items-center  ${
          isVisible ? "top-0" : "top-[-65px]"
        }`}
      >
        <div className={`pl-3 ml-5 text-lg ${searchBtn && "hidden-logo"}`}>
          <SiNike
            onClick={() => {
              navigate("/");
            }}
            className="w-11 h-11 hover:text-gray-500 cursor-pointer"
          />
        </div>
        <NavItem2 searchBtn={searchBtn} setSearchBtn={setSearchBtn} />
      </header>
      <NavItem3 />
    </>
  );
}
