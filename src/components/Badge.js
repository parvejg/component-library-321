import "./Badge.css"
import {TfiBell} from "react-icons/tfi"
import {BsCart3} from "react-icons/bs"
import {AiOutlineMessage} from "react-icons/ai"
import {AiOutlineFolder} from "react-icons/ai"
export const NotificationBadge=()=>{

    return (
       <div className="notification-icon-Wrapper" current-value="6">
       <li><TfiBell className="bell-notification"/></li>
       </div>
    )
}

export const CartBadge=()=>{
    return (
       <div className="cart-icon-Wrapper" current-value="23">
       <li><BsCart3 className="cart-icon"/></li>
       </div>
    )
}

export const MessageBadge=()=>{
    return (
       <div className="message-icon-Wrapper" current-value="83">
       <li><AiOutlineMessage className="message-icon"/></li>
       </div>
    )
}

export const FolderBadge=()=>{
    return (
       <div className="folder-icon-Wrapper" current-value="8">
       <li><AiOutlineFolder className="folder-icon"/></li>
       </div>
    )
}