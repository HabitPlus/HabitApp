import { useNavigate } from "react-router-dom";
import iconBackArrow from "../assets/arrow-back.svg";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <button
        className="hover:cursor-pointer flex flex-col relative -mt-12 ml-6 sm:hidden"
        onClick={() => navigate(-1)}
      >
        
        <img src={iconBackArrow} alt=""/>
    
      </button>
    </>
  );
};