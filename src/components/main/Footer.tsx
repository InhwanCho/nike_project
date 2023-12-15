import { useState } from "react";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import "./css/footer.css";

export default function Footer() {
  const [helpOpen, setHelpOpen] = useState(false);
  const [aboutNikeOpen, setAboutNikeOpen] = useState(false);

  const toggleHelp = () => {
    setHelpOpen(!helpOpen);
  };

  const toggleAboutNike = () => {
    setAboutNikeOpen(!aboutNikeOpen);
  };

  return (
    <footer className="bg-black w-full mt-8 p-10 text-white -z-10">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-8 mb-5">
        <div className="my-font">
          <h5>새로운 소식</h5>
          <h5>멤버 가입</h5>
          <h5>매장안내</h5>
          <h5>나이키 저널</h5>
        </div>
        <div className="my-font">
          <div>
            <button
              onClick={toggleHelp}
              className="flex justify-between w-full disable-click"
            >
              <h5>도움말</h5>
              <span className="sm:hidden">{helpOpen ? "-" : "+"}</span>
            </button>
            <div className={`${helpOpen ? "block" : "hidden"} sm:block`}>
              <p>로그인 안내</p>
              <p>주문배송조회</p>
              <p>반품 정책</p>
              <p>결제 방법</p>
              <p>공지사항</p>
              <p>문의하기</p>
            </div>
          </div>
        </div>
        <div className="my-font">
          <div>
            <button
              onClick={toggleAboutNike}
              className="flex justify-between w-full disable-click"
            >
              <h5>ABOUT NIKE</h5>
              <span className="sm:hidden">{aboutNikeOpen ? "-" : "+"}</span>
            </button>
            <div className={`${aboutNikeOpen ? "block" : "hidden"} sm:block`}>
              <p>소식</p>
              <p>채용</p>
              <p>투자자</p>
              <p>지속가능성</p>
            </div>
          </div>
        </div>
        <div className="my-font col-span-1 sm:col-start-5 flex sm:justify-end space-x-3">
          <p>
            <FaTwitter className="w-8 h-8 p-1 text-gray-900 bg-gray-400 rounded-full hover:bg-gray-50" />
          </p>
          <p>
            <FaFacebookF className="w-8 h-8 p-1 text-gray-900 bg-gray-400 rounded-full hover:bg-gray-50" />
          </p>
        </div>
      </div>
      <div className="flex sm:grid sm:grid-cols-2 border-b">
        <div className="flex pb-2 mx-3 my-font items-center">
          <PiMapPinFill className="w-6 h-6 p-1 text-white" />
          <span className="text-white font-medium text-xs py-2">대한민국</span>
          <span className="ml-5 text-gray-300 font-light text-xs py-2">
            © 2023 Nike, Inc. All Rights Reserved
          </span>
        </div>
        <div className="flex justify-end items-center sm:grid-rows-2">
          <div className="flex row-start-1 sm:justify-end space-x-5 my-font">
            <p>이용약관</p>
            <span className="text-white font-medium text-xs py-2">
              개인정보 처리 방침
            </span>
            <p>위치 기반 서비스 약관</p>
            <p>영상정보처리기기 운영 방침</p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-4">
        <div className="my-font2">
          <p className="row-start-1">
            (유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창
            멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 |
            통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068
            <span>사업자 정보 확인</span>
          </p>
        </div>
        <div className="my-font2">
          <p className="row-start-2">
            고객센터 전화 문의 <span>080-022-0182</span> FAX 02-6744-5880 |
            이메일 <span>service@nike.co.kr</span> | 호스팅서비스사업자
            (유)나이키코리아
          </p>
        </div>
        <div className="my-font2">
          <p className="row-start-1">
            현금 등으로 결제 시 안전 거래를 위해 나이키 쇼핑몰에서 가입하신
            한국결제네트웍스 유한회사의 구매안전 서비스(
            <span>결제대금예치</span>)를 이용하실 수 있습니다.
          </p>
        </div>
        <div className="my-font2">
          <p className="row-start-2">
            콘텐츠산업진흥법에 의한 콘텐츠 보호 안내 <span>자세히 보기</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
