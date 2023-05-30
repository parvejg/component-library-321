import logo from './logo.svg';
import SendIcon from '@mui/icons-material/Send';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import './App.css';
import './components/input.css';
import './components/button.css';
import './components/navbar.css'
import './components/mrfNavbar.css'
import './components/reactNavbar.css';

import {Buttoncomponent,  OutlineBtn, TextBtn} from './components/button'
import Inputs from './components/input'
import ElevatedBtn from './components/elevatedBtn';
import { MrfNavbar, ReactNavbar, TataNavbar } from './components/navbar';


function App() {
  return (  
    <div className="App">
 <h1>components</h1>
 <h2 style={{textAlign: "center"}}> Filled sButtons</h2>
 <Buttoncomponent   name="Like" onClick= {()=> console.log("clicked")}/>
 <Buttoncomponent  name="Send"/>
 <Buttoncomponent  name="Live"/>
 <Buttoncomponent   name="Click"/>
 <Buttoncomponent   name="Link"/>

 <hr/>
 <h2>Outlined Buttons</h2>
 <OutlineBtn className="linkBtn" name="Link"/>
 <OutlineBtn className="disableBtn" name="Disable"/>
 <OutlineBtn className="previewBtn" name="Preview"/>
 <OutlineBtn className="learn-more-Btn"name="Learn More"/>
 <OutlineBtn className="likeBtn" name="Like"/>
 <hr/>
 <h2>Text Buttons</h2>
 <TextBtn  className="closeBtn"name="Close"/>
 <TextBtn  className="enableBtn"name="Enable"/>
 <TextBtn className="publicBtn" name="Public"/>
 <TextBtn className="read-more-btn" name="Read More"/>
 <TextBtn className="save-draft-btn" name="Save Draft"/>
 <hr/>
 <h2>Elevated Buttons</h2>
 <ElevatedBtn  className="liveBtn"name="Live"/>
 <ElevatedBtn className="clickBtn"name="Click"/>
 <ElevatedBtn className="cancelBtn"name="Cancel"/>
 <ElevatedBtn className="sendBtn"name="Send"/>
 <ElevatedBtn className="saveBtn"name="Save"/>
<hr/>
<h2>Icon Buttons</h2>
<div className='iconBtn-header'>
<button className='sendBtn-wrapper'><SendIcon name="Send" className='sendBtnIcon'/></button>
<button className='addCallBtn-wrapper'><AddIcCallRoundedIcon  className='addCall-IconBtn'/></button>
<button className='deleteBtn-wrapper'><DeleteOutlineIcon className='deleteBtn-Icon'/></button>
<button className='saveBtn-wrapper'><FavoriteBorderIcon className="saveBtn-Icon"/></button>
<button className='editBtn-wrapper'><EditIcon className="editBtn-Icon"/></button>
</div>
 <>
<h1>Inputs</h1>
 <Inputs type="Text"   placeholder="Enter your  First Name" />
 <Inputs type="Text"  placeholder="Enter your Last Name" />
 <Inputs  type="Text"  placeholder="Enter your Email" />
 <Inputs type="Number"  placeholder="Enter your Mobile Number" />
 <Inputs type="Password"  placeholder="Enter your Password"  />
 <Inputs type="Date"    />  
 <hr/>
 </>
 <TataNavbar/>
 <ReactNavbar/>
 <MrfNavbar/>
    </div>
  );
}

export default App;
