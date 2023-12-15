import Products from "./Products";
import "../css/shopMain.css";
import { filterItems } from "../../../assets/data";
import { useState } from "react";
import Gender from "./filter/Gender";
import Company from "./filter/Company";

export default function ShopMain({ filter, setFilter }) {
  const [gender, setGender] = useState(false);
  const [company, setCompany] = useState(false);
  
  const [selectGender, setSelectGender] = useState(null);
  const [selectCompany, setSelectCompany] = useState(null);
  


  const handleGender = (event) => {
    setSelectGender(event.target.value);
  };
  const handleCompany = (event) => {
    setSelectCompany(event.target.value);
  };


  function filteredData(temdata, selectGender, selectCompany) {
    let filteredProducts = temdata;
    
    if (selectGender) {
      filteredProducts = filteredProducts.filter(
        ({ gender }) => gender === selectGender
      );
    }
    if (selectCompany) {
      filteredProducts = filteredProducts.filter(
        ({ company }) => company === selectCompany
      );
    }

    return filteredProducts;
  }

  const result = filteredData(temdata, selectGender, selectCompany);

  return (
    <>
      <div className={`flex flex-row`}>
        <div
          className={`${
            filter ? "fade-hidden" : "appear"
          } sticky top-[76px] min-w-[18vw] bg-white h-screen overflow-auto mt-3`}
        >
          <div className="px-8 min-w-[20vw] space-y-6 justify-center items-center whitespace-nowrap">
            <div className="space-y-2 pb-5 border-b-2">
              {filterItems.map((item, i) => (
                <p key={i} className="font-medium">
                  {item.title}
                </p>
              ))}
            </div>
            <Gender
              gender={gender}
              setGender={setGender}
              handleGender={handleGender}
              name={'gender'}
            />
            <Company
              company={company}
              setCompany={setCompany}
              handleCompany={handleCompany}
              name={'company'}
            />
          </div>
        </div>
        <div className="flex-grow">
          <Products temdata={result} />
        </div>
      </div>
    </>
  );
}

const temdata = [
  {
    url: "/img/carousel/img-3.jpeg",
    new: true,
    title: "나이키 프로 여성",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "여성",
    company: "nike",
    color: ["black", "white"],
  },
  {
    url: "/img/carousel/img-2.webp",
    new: true,
    title: "나이키 프로",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "남성",
    company: "nike",
    color: ["black", "white"],
  },
  {
    url: "/img/carousel/img-1.jpeg",
    new: true,
    title: "조단",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "남성",
    company: "jordan",
    color: ["black", "white"],
  },
  {
    url: "/img/carousel/img-1.jpeg",
    new: true,
    title: "나이키 프로",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "남성",
    company: "nike",
    color: ["black", "white"],
  },
  {
    url: "/img/carousel/img-1.jpeg",
    new: true,
    title: "나이키 프로",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "남성",
    company: "nike",
    color: ["black", "white"],
  },
  {
    url: "/img/carousel/img-1.jpeg",
    new: true,
    title: "나이키 프로",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "남성",
    company: "nike",
    color: ["black", "white"],
  },
  {
    url: "/img/carousel/img-1.jpeg",
    new: true,
    title: "나이키 프로",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "남성",
    company: "nike",
    color: ["black", "white"],
  },
  {
    url: "/img/carousel/img-1.jpeg",
    new: true,
    title: "나이키 프로",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "남성",
    company: "nike",
    color: ["black", "white"],
  },
  {
    url: "/img/carousel/img-1.jpeg",
    new: true,
    title: "나이키 프로",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "남성",
    company: "nike",
    color: ["black", "white"],
  },
  {
    url: "/img/carousel/img-1.jpeg",
    new: true,
    title: "나이키 프로",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "남성",
    company: "nike",
    color: ["black", "white"],
  },
  {
    url: "/img/carousel/img-1.jpeg",
    new: true,
    title: "나이키 프로",
    desciption: "남성 드라이핏",
    price: 45000,
    newPrice: 30000,
    gender: "남성",
    company: "nike",
    color: ["black", "white"],
  },
];
