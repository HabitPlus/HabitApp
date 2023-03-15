import { useNavigate } from "react-router-dom";
import iconBackArrow from "../assets/arrow-back.svg";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <button
        className="flex-none hover:cursor-pointer sticky top-3 mt-14"
        onClick={() => navigate(-1)}
      >
        
        <img className="bg-red rounded-full " src={iconBackArrow} alt=""/>
    
      </button>
    </>
  );
};