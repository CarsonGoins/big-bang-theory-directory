const Card = (props) => {
  const styles = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    margin: "10px",
    width: "300px",
  };
  return (
    // All data must be wrapped with parent element
    <div style={styles} className="card">
      <img
        style={{ height: "255px" }}
        src={require("../../images/" + props.image)}
        alt={props.name}
      />
      <div className="container">
        <h3>
          <b>{props.name}</b>
        </h3>
        <p>Job: {props.job}</p>
        <p>Actor: {props.actor}</p>
      </div>
    </div>
  );
};

export default Card;
