import Card from "../Card/Card";
const CardList = (props) => {
  const styles = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    width: "70%",
    padding: "30px",
    display: "flex",
    flexWrap: "wrap",
    margin: "20px auto",
    minWidth: "320px",
    justifyContent: "center",
  };
  return (
    // All data must be wrapped with parent element
    <>
    {props.children}
    <div style={styles} className="cardList">    
    {props.characters.map((character, i) => {
        return (
           <Card key={i} name={character.name} job={character.job} actor={character.actor} image={character.image}>
           </Card>
        );
      })}   
    </div>
    </>

  );
};

export default CardList;
