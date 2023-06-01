import { TbLetterT } from "react-icons/tb";
import {RxAvatar} from "react-icons/rx";
 import { IoIosNotificationsOutline } from "react-icons/io"
export const Tavatar=()=>{
    return(
        <div className="t-avatar-header">
            <a href=""  ><TbLetterT className="t-avatar-icon"/></a>
        </div>
    )
}
export const PersonAvatar =()=>{
    return(
        <div className="person-avatar-header">
             <a href="" ><RxAvatar className="person-avatar-icon"/></a>
        </div>
    )
}

export const NotificationAvatar =()=>{
    return(
        <div className="notification-avatar-header">
             <a href="" ><IoIosNotificationsOutline className="notification-avatar-icon"/></a>
        </div>
    )
}

export const ImageAvatar =()=>{
    return(
        <div className="image-avatar-header">
             <img  className="image-avatar" src="https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </div>
    )
}