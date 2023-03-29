import axios from "axios";
import {InterfaceContent} from "../interfaces/content.interface";

//this URL must be changed, once the backend repository is deployed, for its corresponding URL of the vercel (or similar)
const URL_API = "http://localhost:4000/habitApi/v1/content";


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const appService = {
async postContent (newContent: InterfaceContent) {
    const result = await axios.post(URL_API, newContent, config);
    return result;
  },

 async getContent(){
  const res = await axios.get(URL_API);
  return res.data;
},

async getContentById (_id:string) {
  const res = await axios.get(URL_API + `/${_id}`);
  return res.data;
},

async contentFindOne (_id:string) {
  const res = await axios.get(URL_API + _id);
  return res.data;
}

};

export default appService;