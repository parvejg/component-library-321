import "./Image.css";
export const SmallBoyImage = (props) => {
  const { src } = props;
  return (
    <div className="img-header">
      <div className="img-wrapper">
        <img
          className="small-boy-img"
          alt="boy-img"
          src={
            src
              ? src
              : "https://media.istockphoto.com/id/1125868934/photo/small-boy-looking-through-binoculars-in-nature.webp?b=1&s=170667a&w=0&k=20&c=sCDHlheFxvXuB-QKc37q8HB8WjRUTEUgNHmeRwyecds="
          }
        />
      </div>
    </div>
  );
};
export const CoumputerImage = (props) => {
  const { src, name } = props;
  return (
    <div className="computer-img-header">
      <div className="image-wrapper">
        <img
          alt="computer-img"
          className="computer-img"
          src={
            src
              ? src
              : "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
      </div>
      <div className="info">
        <h1>{name ? name : "Computer"}</h1>
        <p>
          {name ? name : "Don't compare your life to others."}
          <br />
          {name ? name : "You have no idea what they have been through."}
        </p>
      </div>
    </div>
  );
};
export const LetsGoTextImage = (props) => {
  const { src } = props;
  return (
    <div className="letsgo-img-header">
      <div className="lets-go-img-wrapper">
        <img
          className="lets-go-img"
          alt="lets-go-img"
          src={
            src
              ? src
              : "https://images.pexels.com/photos/704767/pexels-photo-704767.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
      </div>
    </div>
  );
};
