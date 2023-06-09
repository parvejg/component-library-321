import "./Card.css";
export const ImageCard = () => {
  return (
    <div className="img-card-wrapper">
      <div className="img-wrapper">
        <img
          className="card-img"
          alt=" img"
          src="https://media.istockphoto.com/id/1372117783/photo/bouquet-of-artificial-red-roses.jpg?s=612x612&w=0&k=20&c=hWF50iDZpjzG8aBgSBbhgerYkl4DqJxQEnRc_hGmYzs="
        />
      </div>
      <div className="img-card-title">
        <h2>Floral Photos</h2>
      </div>
      <div className="btn-wrapper">
        <button className="img-card-learn-more-btn">More Learn..</button>
      </div>
    </div>
  );
};
