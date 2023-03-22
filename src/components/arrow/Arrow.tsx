import { useNavigate } from "react-router-dom";
import iconBackArrow from "../../assets/general/arrow-back.svg";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <button
        className="hover:cursor-pointer flex flex-col relative -mt-10 ml-8 sm:hidden"
        onClick={() => navigate(-1)}>
        <img src={iconBackArrow} alt="" />
      </button>
    </>
  );
};