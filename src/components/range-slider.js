import { useState } from "react"
import { BsVolumeUp } from "react-icons/bs";

export const VolumeSlider =()=>{
const [data , setData] = useState([0])

    return (<>
    <h3><BsVolumeUp/></h3>

 <input type="range" className="volume-slider" min="0" max="100"  onChange={(data)=>setData(data.target.value)}/>
    <h2 className="show-volumeInDigit">{data}</h2>

    </>
        )
}