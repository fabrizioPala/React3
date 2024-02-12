import { useState,useEffect, useContext} from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock(){

    
const [date, setDate] = useState(new Date()); 

    const language= useContext(LanguageContext)
    useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    }; 
  });
  return(
<div>
  <h2>{language==="eng"?"current time:":"ora attuale"}</h2>

{date.toLocaleTimeString()}
      </div>)}
