import { ChangeEvent } from 'react';
import '../css/shopMain.css'

interface InputRadioProps{
  title:string;
  handle:(event: ChangeEvent<HTMLInputElement>) => void;
  name:string;
}

export default function InputRadio({title, handle, name}:InputRadioProps) {
  
  return (
    <label className="sidebar-label-container">
      <input type="radio" value={title} name={name} onChange={handle} />
      <span className="checkmark"></span>{title.toUpperCase()}
    </label>
  );
}
