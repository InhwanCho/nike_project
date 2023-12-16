import "../../css/sidefilter.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import InputRadio from "../InputRadio";
import { ChangeEvent, SetStateAction } from "react";

interface GenderProps{
  gender:null|boolean;
  setGender:React.Dispatch<SetStateAction<boolean | null>>;
  handleGender:(event: ChangeEvent<HTMLInputElement>) => void;
  name:string;
}

export default function Gender({ gender, setGender, handleGender, name }:GenderProps) {
  return (
    <>
      <div className="flex flex-col space-y-2 border-b-2 pb-5">
        <div
          className="flex justify-between"
          onClick={() => setGender(!gender)}
        >
          <h4 className="text-lg mb-2 select-none">성별</h4>
          {gender ? (
            <FaAngleDown className="w-5 h-5 mr-1" />
          ) : (
            <FaAngleUp className="w-5 h-5 mr-1" />
          )}
        </div>
        <div className={`${gender && "hidden"}`}>
          <label className="sidebar-label-container">
            <input
              type="radio"
              value={""}
              name="gender"
              onChange={handleGender}
            />
            <span className="checkmark"></span>All
          </label>
            <InputRadio title={"남성"} handle={handleGender} name={name}/>
            <InputRadio title={"여성"} handle={handleGender} name={name}/>
        </div>
      </div>
    </>
  );
}
