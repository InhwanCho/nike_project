import '../css/shopMain.css'
export default function InputRadio({title, handle, name}) {
  
  return (
    <label className="sidebar-label-container">
      <input type="radio" value={title} name={name} onChange={handle} />
      <span className="checkmark"></span>{title.toUpperCase()}
    </label>
  );
}
