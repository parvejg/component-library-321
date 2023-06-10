import { DateInput, PasswordInput, TextInput } from "./Input";
import { Layout } from "./Layout";
import "./Input.css";
import "./InputPage.css";
export const InputPage = () => {
  return (
    <Layout>
      <div className="inputs-wrapper">
        <h2>Inputs</h2>
        <TextInput />
        {/* style={{
              width: "600px",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
           */}
        <PasswordInput />
        <div></div>
        <DateInput />
        <div></div>
      </div>
    </Layout>
  );
};
