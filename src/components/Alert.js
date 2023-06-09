 import {GoAlert} from   "react-icons/go";
 import {AiFillCheckCircle} from "react-icons/ai"
 import {AiFillAlert} from "react-icons/ai"
 import "./Alert.css";
export const AlertError=()=>{
    return (
        <div>
            <p className="error-icon-wrapper"><GoAlert className="error-icon"/></p>
        </div>
    )
}
export const SuccessfulAlert=()=>{
    return (
        <div>
            <p className="successful-icon-wrapper"><AiFillCheckCircle className="successful-icon"/></p>
        </div>
    )
}
export const SecurityAlert=()=>{
    return (
        <div>
            <p className="security-icon-wrapper"><AiFillAlert className="security-icon"/></p>
        </div>
    )
}