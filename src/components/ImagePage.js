import {Layout} from './Layout'
import './ImagePage.css'
import {CoumputerImage, SmallBoyImage,LetsGoTextImage } from './Image'
export const ImagePage=()=>{
    return( <Layout>
<div className='images-container'>
<SmallBoyImage/>
<div className="iframe-wrapper">
<iframe title='boy-img'
  src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520SmallBoyImage%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520src%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522img-header%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522img-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522small-boy-img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522boy-img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253F%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253A%2520%2522https%253A%252F%252Fmedia.istockphoto.com%252Fid%252F1125868934%252Fphoto%252Fsmall-boy-looking-through-binoculars-in-nature.webp%253Fb%253D1%2526s%253D170667a%2526w%253D0%2526k%253D20%2526c%253DsCDHlheFxvXuB-QKc37q8HB8WjRUTEUgNHmeRwyecds%253D%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
  style={{
    width: "inherit",
    height: "316px",
    border: "0",
    transform: "scale(1)",
    overflow: "hidden",

  }} 
sandbox="allow-scripts allow-same-origin">
</iframe>
</div>
<CoumputerImage/>
<div className="iframe-wrapper">
<iframe title='computer-img'
  src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520CoumputerImage%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520src%252C%2520name%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522computer-img-header%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522image-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522computer-img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522computer-img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253F%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253A%2520%2522https%253A%252F%252Fimages.pexels.com%252Fphotos%252F669996%252Fpexels-photo-669996.jpeg%253Fauto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D600%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522info%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Computer%2522%257D%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Don%27t%2520compare%2520your%2520life%2520to%2520others.%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbr%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522You%2520have%2520no%2520idea%2520what%2520they%2520have%2520been%2520through.%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B%250A"
  style={{
    width: "inherit",
    height: "316px",
    border: "0",
    transform: "scale(1)",
    overflow: "hidden",
  }} 
sandbox="allow-scripts allow-same-origin">
</iframe>
</div>
<LetsGoTextImage/>
<div className="iframe-wrapper">
<iframe title='letsgo-text-image'
  src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520LetsGoTextImage%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520src%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522letsgo-img-header%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522lets-go-img-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522lets-go-img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522lets-go-img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253F%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253A%2520%2522https%253A%252F%252Fimages.pexels.com%252Fphotos%252F704767%252Fpexels-photo-704767.jpeg%253Fauto%253Dcompress%2526cs%253Dtinysrgb%2526w%253D600%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B%250A%257D%253B%250A"
  style={{
    width: "inherit",
    height: "316px",
    border: "0",
    transform: "scale(1)",
    overflow: "hidden",
  }} 
sandbox="allow-scripts allow-same-origin">
</iframe>
</div>
</div>

    </Layout>
)}