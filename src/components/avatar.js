import { TbLetterT } from "react-icons/tb";
import {RxAvatar} from "react-icons/rx";
 import { IoIosNotificationsOutline } from "react-icons/io"
export const TLetterAvatar=(propse)=>{
    const {className, href }= propse;
    return(
        <div className={`t-avatar-header ${className}`}>
            <a href="/"  ><TbLetterT className={`t-avatar-icon ${className}`}/></a>
        </div>
    )
}
export const PersonIconAvatar =(propse)=>{
    const {className,  href }= propse;
    return(
        <div className={`person-avatar-header ${className}`}>
             <a href="/" ><RxAvatar className={`person-avatar-icon ${className}`}/></a>
        </div>
    )
}

export const NotificationIconAvatar =(propse)=>{
    const {className , href }= propse;
    return(
        <div className={`notification-avatar-header ${className}`}>
             <a href="/" ><IoIosNotificationsOutline className={`notification-avatar-icon ${className}`}/></a>
        </div>
    )
}

export const ImageAvatar =(propse)=>{
    const {className, src, href }= propse;
    return(
        <div className={`image-avatar-header ${className}`}>
             <img className={`image-avatar ${className}`} src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </div>
    )
}