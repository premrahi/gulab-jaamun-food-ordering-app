const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        src={resData.image}
        className="res-logo"
      />
      <h3>{resData.name}</h3>
      <p>{resData.cuisines.join(", ")}</p>
      <h5>{resData.rating}⭐ stars</h5>
      <p>{resData.deliveryTime}minutes</p>
    </div>
  );
};
export default ResCard ;
