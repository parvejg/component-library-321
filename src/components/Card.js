import "./Card.css";
export const ImageCard = (props) => {
  const { src, alt, name } = props;
  return (
    <div className="img-card-wrapper">
      <div className="img-wrapper">
        <img
          className="card-img"
          alt={`img ${alt}`}
          src={
            src
              ? src
              : "https://media.istockphoto.com/id/1372117783/photo/bouquet-of-artificial-red-roses.jpg?s=612x612&w=0&k=20&c=hWF50iDZpjzG8aBgSBbhgerYkl4DqJxQEnRc_hGmYzs="
          }
        />
      </div>
      <div className="img-card-title">
        <h2>{name ? name : "Floral photos"}</h2>
      </div>
      <div className="btn-wrapper">
        <button className="img-card-learn-more-btn">
          {name ? name : "Learn more.."}
        </button>
      </div>
    </div>
  );
};
export const ProductDemoCard = (props) => {
  const { src, alt } = props;
  return (
    <div className="product-demo-container">
      <div className="product-img-container">
        <img
          className="product-img"
          alt={`product-img ${alt}`}
          src={
            src
              ? src
              : "https://media.istockphoto.com/id/679539190/photo/indian-made-mens-shoes.jpg?s=612x612&w=0&k=20&c=1wTYVNCgSpNcnzfLxPzjfd1swEWXnUZHKzikNupEaWk="
          }
        />
      </div>
      <div className="product-price-container">
        <h3 className="product-price">Price 7999</h3>
      </div>
      <div className="product-titel-container">
        <h2>Best Quality</h2>
      </div>
      <div className="Buy-now-btn-wrapper">
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};
export const LinkedInAppCard = (props) => {
  const { src, alt, href } = props;
  return (
    <div className="linkedin-app-card-container">
      <div className="linkedin-img-container">
        <img
          className="linkedin-img"
          alt={`img ${alt}`}
          src={
            src
              ? src
              : "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
          }
        />
        <div className="title-container">
          <h3>LinkedIn</h3>
        </div>
        <div className="app-card-links-container">
          <a
            className="linkedin-card-link"
            href={href ? href : "https://www.linkedin.com/feed/"}
          >
            LinkedIn.inc
          </a>
        </div>
      </div>
    </div>
  );
};
