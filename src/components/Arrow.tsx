import { useNavigate } from "react-router-dom";
import iconBackArrow from "../assets/arrow-back.svg";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <button
        className="bg-blue hover:cursor-pointer flex flex-col absolute mt-32"
        onClick={() => navigate(-1)}
      >
        
        <img className="w-24" src={iconBackArrow} alt=""/>
    
      </button>
    </>
  );
};