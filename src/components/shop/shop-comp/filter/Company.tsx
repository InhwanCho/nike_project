import '../../css/sidefilter.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import InputRadio from '../InputRadio';
import { ChangeEvent, SetStateAction } from 'react';

interface CompanyProps{
  company:null|boolean;
  setCompany:React.Dispatch<SetStateAction<boolean | null>>;
  handleCompany:(event: ChangeEvent<HTMLInputElement>) => void;
  name:string;
}

export default function Company({company,setCompany,handleCompany, name}:CompanyProps) {
  return (
    <div className="flex flex-col space-y-2 border-b-2 pb-5">
      <div className="flex justify-between" onClick={() => setCompany(!company)}>
        <h4 className="text-lg mb-2 select-none">회사</h4>
        {company ? (
          <FaAngleDown className="w-5 h-5 mr-1" />
        ) : (
          <FaAngleUp className="w-5 h-5 mr-1" />
        )}
      </div>
      
      <div className={`${company && "hidden"} select-none`}>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value={""}
            name="company"
            onChange={handleCompany}
          />
          <span className="checkmark"></span>All
        </label>
        <InputRadio title={"nike"} handle={handleCompany} name={name}/>
        <InputRadio title={"jordan"} handle={handleCompany} name={name}/>
      </div>
    </div>
  )
}
