import "./Modal.css";
import {FiCheck} from "react-icons/fi"
export const SuccessfulModal=()=>{
    return (
        <div className="successfulModal-container">
            <div className="successful-modal-wrapper">
                <div className="successful-icon-wrapper" >
                <FiCheck/>
                </div>

                <div className="content-successful">
                <h2>Thank You!.</h2>
                <p>Your details has been successfully submited.</p>
                </div>
                <button className="successful-modal-btn">Ok</button>
            </div>
        </div>
      
    )
}