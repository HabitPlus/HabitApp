import axios from "axios";
import {InterfaceContent} from "../interfaces/content.interface";

//this URL must be changed, once the backend repository is deployed, for its corresponding URL of the vercel (or similar)
const URL_API = "http://localhost:4000/habitApi/v1/content";


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const postContent = async (newContent: InterfaceContent) => {
  try {
    const result = await axios.post(URL_API, newContent, config);
    return result;
  } catch (error) {
    return error;
  }
};

export default {postContent};