import {useState} from 'react';
import './DropdownMenu.css';
export const DropdownMenu = (props) => {
    const [flag,setFlag] = useState(false);
    const myFunction = ()=>{
        setFlag(!flag);
    }
  return (
    <div className="dropdown">
      <span onClick={()=>myFunction()} className="dropbtn">
        {props.name}
      </span>
      {flag && <div id="myDropdown" className="dropdown-content">
        {props.items.map((item)=>{
            return <div className='dropDownItem'>{item}</div>;
        })}
      </div>}
    </div>
  );
};