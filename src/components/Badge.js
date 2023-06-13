import "./Badge.css"
import {TfiBell} from "react-icons/tfi"
export const NotificationBadge=()=>{

    return (
       <div className="notification-badge-header">
       <div className="notification-icon-Wrapper" current-value="6">
       <li><TfiBell className="bell-notification"/></li>
       </div>
       </div>
    )
}