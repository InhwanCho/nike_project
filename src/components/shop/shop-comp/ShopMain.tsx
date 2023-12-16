import Products from "./Products";
import "../css/shopMain.css";
import { filterItems } from "../../../assets/data";
import { ChangeEvent, useState } from "react";
import Gender from "./filter/Gender";
import Company from "./filter/Company";
import { shopdata } from "../../../assets/data";
import { ShopProps } from "../../../type/type";

interface ShopMainProps{
  filter: boolean|undefined;
  setFilter?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ShopMain({ filter }:ShopMainProps) {
  //토글
  const [gender, setGender] = useState<null|boolean>(false);
  const [company, setCompany] = useState<null|boolean>(false);
  
  const [selectGender, setSelectGender] = useState<string | null>(null);
  const [selectCompany, setSelectCompany] = useState<string | null>(null);
  


  const handleGender = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectGender(event.target.value);
  };
  const handleCompany = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectCompany(event.target.value);
  };


  function filteredData(shopdata:ShopProps[], selectGender:null|string, selectCompany:null|string) {
    let filteredProducts = shopdata;
    
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

  const result = filteredData(shopdata, selectGender, selectCompany);

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
          <Products shopdata={result} />
        </div>
      </div>
    </>
  );
}
