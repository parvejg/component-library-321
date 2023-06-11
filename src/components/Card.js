import "./Card.css";
export const ImageCard = (props) => {
  const {
    src,
    alt,
    imgCardWrapperClass,
    imgWrapperClass,
    cardImgClass,
    imgCardTitleClass,
    btnWrapperClass,
    imgCardLearnMoreBtnClass,
  } = props;
  return (
    <div className={`img-card-wrapper ${imgCardWrapperClass}`}>
      <div className={`img-wrapper ${imgWrapperClass}`}>
        <img
          className={`card-img ${cardImgClass}`}
          alt={`img ${alt}`}
          src={
            src
              ? src
              : "https://media.istockphoto.com/id/1372117783/photo/bouquet-of-artificial-red-roses.jpg?s=612x612&w=0&k=20&c=hWF50iDZpjzG8aBgSBbhgerYkl4DqJxQEnRc_hGmYzs="
          }
        />
      </div>
      <div className={`img-card-title ${imgCardTitleClass}`}>
        <h2>Floral Photos</h2>
      </div>
      <div className={`btn-wrapper ${btnWrapperClass}`}>
        <button
          className={`img-card-learn-more-btn ${imgCardLearnMoreBtnClass}`}
        >
          More Learn..
        </button>
      </div>
    </div>
  );
};
export const ProductDemoCard = (props) => {
  const {
    src,
    alt,
    productDemoContainerClass,
    productImgContainerClass,
    productImgClass,
    productPriceContainerClass,
    productPriceClass,
    productTitelContainerClass,
    BuyNowBtnWrapperClass,
    buyNowBtnClass,
  } = props;
  return (
    <div className={`product-demo-container ${productDemoContainerClass}`}>
      <div className={`product-img-container ${productImgContainerClass}`}>
        <img
          className={`product-img ${productImgClass}`}
          alt={`product-img ${alt}`}
          src={
            src
              ? src
              : "https://media.istockphoto.com/id/679539190/photo/indian-made-mens-shoes.jpg?s=612x612&w=0&k=20&c=1wTYVNCgSpNcnzfLxPzjfd1swEWXnUZHKzikNupEaWk="
          }
        />
      </div>
      <div className={`product-price-container ${productPriceContainerClass}`}>
        <h3 className={`product-price ${productPriceClass}`}>Price 5999</h3>
      </div>
      <div className={`product-titel-container ${productTitelContainerClass}`}>
        <h2>Best Quality</h2>
      </div>
      <div className={`Buy-now-btn-wrapper ${BuyNowBtnWrapperClass}`}>
        <button className={`buy-now-btn ${buyNowBtnClass}`}>Buy Now</button>
      </div>
    </div>
  );
};
export const LinkedInAppCard = (props) => {
  const {
    className,
    src,
    alt,
    href,
    linkedinAppCardContainerClass,
    linkedinImgContainerClass,
    linkedinImgClass,
    titleContainerClass,
    appCardLinksContainerClass,
    linkedinCardLinkClass,
  } = props;
  return (
    <div
      className={`linkedin-app-card-container ${linkedinAppCardContainerClass}`}
    >
      <div className={`linkedin-img-container ${linkedinImgContainerClass}`}>
        <img
          className={`linkedin-img ${linkedinImgClass}`}
          alt={`img ${alt}`}
          src={
            src
              ? src
              : "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
          }
        />
        <div className={`title-container ${titleContainerClass}`}>
          <h3>LinkedIn</h3>
        </div>
        <div
          className={`app-card-links-container ${appCardLinksContainerClass}`}
        >
          <a
            className={`linkedin-card-link ${linkedinCardLinkClass}`}
            href={href ? href : "https://www.linkedin.com/feed/"}
          >
            LinkedIn.inc
          </a>
        </div>
      </div>
    </div>
  );
};
