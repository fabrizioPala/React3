import { Link } from "react-router-dom";

export function Welcome({name,age}){
    return <div>
        <p>Welcome , <strong>{name}</strong></p>
        <p>Your age is: {age}</p>
        
    </div>
}
