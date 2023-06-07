import { DateInput, PasswordInput, TextInput } from "./Input";
import { Layout } from "./layout";
import "./Input.css";
export const InputPage = () => {
  return (
    <Layout>
      <div>
        <h2>Inputs</h2>
        <TextInput />
        <div>
          <iframe   title="text-input-iframe"
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=import%2520%2522.%252FInput.css%2522%253B%250Aexport%2520const%2520TextInput%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520placeholder%252C%2520type%252C%2520className%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253C%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560text-input%2520%2524%257BclassName%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520placeholder%253D%257Bplaceholder%2520%253F%2520placeholder%2520%253A%2520%2522Enter%2520your%2520Text%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520type%253D%257Btype%2520%253F%2520type%2520%253A%2520%2522text%2522%257D%250A%2520%2520%2520%2520%2520%2520%253E%253C%252Finput%253E%250A%2520%2520%2520%2520%253C%252F%253E%250A%2520%2520%29%253B%250A%257D%253B%250A"
            style={{
              width: "597px",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <PasswordInput />
        <div>
          <iframe   title="password-input-iframe"
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520PasswordInput%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520placeholder%252C%2520type%252C%2520className%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253C%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560password-input%2520%2524%257BclassName%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520placeholder%253D%257Bplaceholder%2520%253F%2520placeholder%2520%253A%2520%2522Enter%2520your%2520Password%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520type%253D%257Btype%2520%253F%2520type%2520%253A%2520%2522password%2522%257D%250A%2520%2520%2520%2520%2520%2520%253E%253C%252Finput%253E%250A%2520%2520%2520%2520%253C%252F%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "597px",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <DateInput />
        <div>
          <iframe   title="date-input-iframe"
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520DateInput%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520placeholder%252C%2520type%252C%2520className%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253C%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560date-input%2520%2524%257BclassName%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520placeholder%253D%257Bplaceholder%2520%253F%2520placeholder%2520%253A%2520%2522Enter%2520your%2520Birth%2520Date%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520type%253D%257Btype%2520%253F%2520type%2520%253A%2520%2522date%2522%257D%250A%2520%2520%2520%2520%2520%2520%253E%253C%252Finput%253E%250A%2520%2520%2520%2520%253C%252F%253E%250A%2520%2520%29%253B%250A%257D%253B%250A"
            style={{
              width: "597px",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};