import { Layout } from "./layout";
import { ElevatedButton,  } from "./button";
import { TextBtn } from "./Text-Btn";
export const Buttonpage =()=>{
  return ( <Layout>
      <div>
        <h2>Buttons</h2>
        <TextBtn/>
        <TextBtn/>
        <TextBtn/> <TextBtn/>
        <div>
         <iframe  title="text-button-iframe"
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520export%2520const%2520TextBtn%2520%253D%28props%29%253D%253E%257B%250A%2520%2520%2520%2520const%2520%257Bname%252C%2520className%257D%2520%253D%2520props%250A%2520%2520%2520%2520return%28%2520%253Cbutton%2520className%253D%257B%2560txtBtn%2520%2524%257BclassName%257D%2560%257D%253E%257Bname%2520%253F%2520name%253A%2520%2522Text%2520Btn%2522%257D%253C%252Fbutton%253E%250A%2520%2520%2520%2520%29%253B%250A%257D"
  style= {{width: "597px" , height: "316px",  border: "0", transform: "scale(1)", overflow: "hidden", }}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>
        <ElevatedButton/>
      </div>
    </Layout>
  );
};

