import { Layout } from "./Layout";
import { ElevatedButton } from "./Button.js";
import { TextBtn } from "./Button.js";
import { OutlineBtn } from "./Button.js";
export const ButtonPage = () => {
  return (
    <Layout>
      <div>
        <h2> Buttons </h2> <TextBtn />
        {/* style={{
              width: "597px",
              height: "316px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
          */}
        <ElevatedButton />
        <OutlineBtn />
      </div>
    </Layout>
  );
};
