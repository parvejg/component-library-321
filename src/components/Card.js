import "./Card.css";
export const ImageCard = (props) => {
  const { className, src, alt } = props;
  return (
    <div className={`img-card-wrapper ${className}`}>
      <div className={`img-wrapper ${className}`}>
        <img
          className={`card-img ${className}`}
          alt={`img ${alt}`}
          src={
            src
              ? src
              : "https://media.istockphoto.com/id/1372117783/photo/bouquet-of-artificial-red-roses.jpg?s=612x612&w=0&k=20&c=hWF50iDZpjzG8aBgSBbhgerYkl4DqJxQEnRc_hGmYzs="}
        />
      </div>
      <div className={`img-card-title ${className}`}>
        <h2>Floral Photos</h2>
      </div>
      <div className={`btn-wrapper ${className}`}>
        <button className={`img-card-learn-more-btn ${className}`}>More Learn..</button>
      </div>
    </div>
  );
};
export const ProductDemoCard = (props) => {
  const { className, src, alt } = props;
  return (
    <div className={`product-demo-container ${className}`}>
      <div className={`product-img-container ${className}`}>
        <img
          className={`product-img ${className}`}
          alt={`product-img ${alt}`}
          src={
            src
              ? src
              : "https://media.istockphoto.com/id/679539190/photo/indian-made-mens-shoes.jpg?s=612x612&w=0&k=20&c=1wTYVNCgSpNcnzfLxPzjfd1swEWXnUZHKzikNupEaWk="
          }
        />
      </div>
      <div className={`product-price-container ${className}`}>
        <h3 className={`product-price ${className}`}>Price 5999</h3>
      </div>
      <div className={`product-titel-container ${className}`}>
        <h2>Best Quality</h2>
      </div>
      <div className={`Buy-now-btn-wrapper ${className}`}>
        <button className={`buy-now-btn ${className}`}>Buy Now</button>
      </div>
    </div>
  );
};
export const LinkedInAppCard = (props) => {
  const { className, src, alt, href } = props;
  return (
    <div className={`linkedin-app-card-container ${className}`}>
      <div className={`linkedin-img-container ${className}`}>
        <img
          className={`linkedin-img ${className}`}
          alt={`img ${alt}`}
          src={
            src
              ? src
              : "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
          }
        />
        <div className={`title-container ${className}`}>
          <h3>LinkedIn</h3>
        </div>
        <div className={`app-card-links-container ${className}`}>
          <a
            className={`linkedin-card-link ${className}`}
            href={href ? href : "https://www.linkedin.com/feed/"}
          >
            LinkedIn.inc
          </a>
        </div>
      </div>
    </div>
  );
};
