import logo from './logo.svg';
import './App.css';
import './components/input.css';
import './components/button.css';
import {Buttoncomponent, DeleteBtn, OutlineBtn, TextBtn} from './components/button'
import Inputs from './components/input'
import { Component } from 'react';
import ElevatedBtn from './components/elevatedBtn';


function App() {
  return (  
    <div className="App">
 <h1>components</h1>
 <h2 style={{textAlign: "center"}}>Buttons</h2>
 <Buttoncomponent   name="Like" onClick= {()=> console.log("clicked")}/>
 <Buttoncomponent  name="Send"/>
 <Buttoncomponent  name="Live"/>
 <Buttoncomponent   name="Click"/>
 <Buttoncomponent   name="Link"/>
 <DeleteBtn  name="Delete" src={require('./images/delete.png')} />
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

 <>

<h1>Inputs</h1>
 <Inputs type="Text"   placeholder="Enter your  First Name" />
 <Inputs type="Text"  placeholder="Enter your Last Name" />
 <Inputs  type="Text"  placeholder="Enter your Email" />
 <Inputs type="Number"  placeholder="Enter your Mobile Number" />
 <Inputs type="Password"  placeholder="Enter your Password"  />
 <Inputs type="Date"  placeholder="Enter your Birth Date"  />  
 <hr/>
 </>
 
    </div>
  );
}

export default App;
