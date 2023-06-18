import { DateInput, PasswordInput, TextInput } from "./Input";
import { Layout } from "./Layout";
import "./Input.css";
import "./InputPage.css";
import {GrNext} from "react-icons/gr";
import {GrPrevious} from "react-icons/gr";
import { Link } from "react-router-dom";
export const InputPage = () => {
  return (
    <Layout>
      <div className="inputs-wrapper">
        <h2>Inputs</h2>
        <TextInput />
        <div className="iframe-wrapper">
          <iframe
            title="text-input"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520TextInput%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520placeholder%252C%2520type%252C%2520textInputClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253C%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560text-input%2520%2524%257BtextInputClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520placeholder%253D%257Bplaceholder%2520%253F%2520placeholder%2520%253A%2520%2522Enter%2520your%2520Text%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520type%253D%257Btype%2520%253F%2520type%2520%253A%2520%2522text%2522%257D%250A%2520%2520%2520%2520%2520%2520%253E%253C%252Finput%253E%250A%2520%2520%2520%2520%253C%252F%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <PasswordInput />
        <div className="iframe-wrapper">
          <iframe
            title="password-input"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%250Aexport%2520const%2520PasswordInput%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520placeholder%252C%2520type%252C%2520passwordInputClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253C%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560password-input%2520%2524%257BpasswordInputClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520placeholder%253D%257Bplaceholder%2520%253F%2520placeholder%2520%253A%2520%2522Enter%2520your%2520Password%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520type%253D%257Btype%2520%253F%2520type%2520%253A%2520%2522password%2522%257D%250A%2520%2520%2520%2520%2520%2520%253E%253C%252Finput%253E%250A%2520%2520%2520%2520%253C%252F%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <DateInput />
        <div className="iframe-wrapper">
          <iframe
            title="date-input"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%250Aexport%2520const%2520DateInput%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520placeholder%252C%2520type%252C%2520dateInputClass%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253C%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560date-input%2520%2524%257BdateInputClass%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520placeholder%253D%257Bplaceholder%2520%253F%2520placeholder%2520%253A%2520%2522Enter%2520your%2520Birth%2520Date%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520type%253D%257Btype%2520%253F%2520type%2520%253A%2520%2522date%2522%257D%250A%2520%2520%2520%2520%2520%2520%253E%253C%252Finput%253E%250A%2520%2520%2520%2520%253C%252F%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "inherit",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <div className="navigation-btn-container">
          
        <Link to="/image-page" className='navigation-previous-btn-wrapper'>
            <GrPrevious  className='navigation-icon'/>
          </Link>
          <Link to="/list-page" className='navigation-next-btn-wrapper'>
          <GrNext className="navigation-icon"/>
          </Link>
        
        </div>
      </div>
    </Layout>
  );
};
