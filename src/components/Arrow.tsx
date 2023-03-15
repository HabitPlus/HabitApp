import { useNavigate } from "react-router-dom";
import iconBackArrow from "../assets/arrow-back.svg";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <button
        className="hover:cursor-pointer flex flex-col absolute mt-24 ml-6 sm:hidden"
        onClick={() => navigate(-1)}
      >
        
        <img className="" src={iconBackArrow} alt=""/>
    
      </button>
    </>
  );
};