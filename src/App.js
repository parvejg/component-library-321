import logo from './logo.svg';
import './App.css';
import {Buttoncomponent,RadioGrp, DeleteBtn} from './components/button'
import Inputs from './components/input'
import FloatingActionBtn from '@mui/icons-material/ShareRounded';
import CheckBox from './checkBox';


function App() {
  const name = ""
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
 <>
  <h1>Floating Buttons</h1>
  <FloatingActionBtn  id="floatingBtn" />
 <hr/>
 </>
 <h1>Radio Group</h1>
 <>
<h2>Gender</h2>
  <RadioGrp type="radio" name="Male" value="Male" className="radioGrp" />
 <RadioGrp type="radio" name="Female" value="Female"  className="radioGrp"/>
 <RadioGrp type="radio" name="Other"  value="Other" className="radioGrp"/>
 <hr/>
 <RadioGrp type="radio" name="First" value="1" className="radioGrp" />
 <RadioGrp type="radio" name="Second" value="2"  className="radioGrp"/>
 <RadioGrp type="radio" name="Third"  value="3" className="radioGrp"/>
<hr/>
<RadioGrp type="radio" name="Green" value="green" className="radioGrp" />
 <RadioGrp type="radio" name="Red" value="red"  className="radioGrp"/>
 <RadioGrp type="radio" name="Blue"  value="blue" className="radioGrp"/>
 </>
 <hr/>
 <h2>CheckBox</h2>
 <CheckBox  value="checkBox"/>
 <CheckBox  value="checkBox"/>
 <CheckBox  value="checkBox"/>
 <CheckBox  value="checkBox"/>
 
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
