import { LinkedInAppCard, ImageCard, ProductDemoCard } from "./Card";
import { Layout } from "./Layout";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

export const CardPage = () => {
  return (
    <Layout>
      <div className="main-cards-wrapper">
        <h2>Cards</h2>
        <ImageCard />
        <div className="iframe-wrapper">
          <iframe
            title="img-card-flowers"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520ImageCard%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520src%252C%2520alt%252C%2520name%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522img-card-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522img-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522card-img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%257B%2560img%2520%2524%257Balt%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253F%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253A%2520%2522https%253A%252F%252Fmedia.istockphoto.com%252Fid%252F1372117783%252Fphoto%252Fbouquet-of-artificial-red-roses.jpg%253Fs%253D612x612%2526w%253D0%2526k%253D20%2526c%253DhWF50iDZpjzG8aBgSBbhgerYkl4DqJxQEnRc_hGmYzs%253D%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522img-card-title%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Floral%2520photos%2522%257D%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522btn-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522img-card-learn-more-btn%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bname%2520%253F%2520name%2520%253A%2520%2522Learn%2520more..%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
        <ProductDemoCard />
        <div className="iframe-wrapper">
          <iframe
            title="product-demo-card"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520ProductDemoCard%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520src%252C%2520alt%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522product-demo-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522product-img-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522product-img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%257B%2560product-img%2520%2524%257Balt%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253F%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253A%2520%2522https%253A%252F%252Fmedia.istockphoto.com%252Fid%252F679539190%252Fphoto%252Findian-made-mens-shoes.jpg%253Fs%253D612x612%2526w%253D0%2526k%253D20%2526c%253D1wTYVNCgSpNcnzfLxPzjfd1swEWXnUZHKzikNupEaWk%253D%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522product-price-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520className%253D%2522product-price%2522%253EPrice%25205999%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522product-titel-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EBest%2520Quality%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522Buy-now-btn-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522buy-now-btn%2522%253EBuy%2520Now%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
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
        <LinkedInAppCard />
        <div className="iframe-wrapper">
          <iframe
            title="LinkedInAppCard"
            src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=blackboard&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=export%2520const%2520LinkedInAppCard%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257B%2520src%252C%2520alt%252C%2520href%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522linkedin-app-card-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522linkedin-img-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522linkedin-img%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%257B%2560img%2520%2524%257Balt%257D%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253F%2520src%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253A%2520%2522https%253A%252F%252Fplay-lh.googleusercontent.com%252FkMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522title-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253ELinkedIn%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522app-card-links-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522linkedin-card-link%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520href%253D%257Bhref%2520%253F%2520href%2520%253A%2520%2522https%253A%252F%252Fwww.linkedin.com%252Ffeed%252F%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520LinkedIn.inc%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B%250A%250A%257D%253B"
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
          <Link to="/button-page" className="navigation-previous-btn-wrapper">
            <GrPrevious className="navigation-icon" />
          </Link>
          <Link to="/image-page" className="navigation-next-btn-wrapper">
            <GrNext className="navigation-icon" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};
