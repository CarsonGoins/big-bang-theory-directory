import "./App.css";
import {useState} from "react"
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import CardList from "./Components/CardList/CardList";

function App() {
  const characters = [
    {
      name: "Sheldon Cooper",
      actor: "Jim Parsons",
      job: "Theoretical Physicist",
      image: "sheldon.jpg",
    },
    {
      name: "Leonard Hofstadter",
      actor: "Johnny Galecki",
      job: "Experimental Physicist",
      image: "leonard.jpg",
    },
    {
      name: "Penny",
      actor: "Kaley Cuoco",
      job: "Waitress ",
      image: "penny.jpg",
    },
    {
      name: "Howard Wolowitz",
      actor: "Simon Helberg",
      job: "Aerospace Engineer",
      image: "howard.jpg",
    },
    {
      name: "Rajesh Koothrappal",
      actor: "Kunal Nayyar",
      job: "Astrophysicist",
      image: "raj.jpg",
    },
    {
      name: "Leslie Winkle",
      actor: "Sara Gilberts",
      job: "Experimental Physicist",
      image: "leslie.jpg",
    },
    {
      name: "Bernadette Rostenkowski-Wolowitz",
      actor: "Melissa Rauch",
      job: "Waitress",
      image: "bernadette.jpg",
    },
    {
      name: "Amy Farrah Fowle",
      actor: "Mayim Bialik",
      job: "Neuroscientist",
      image: "amy.jpg",
    },
    {
      name: "Stuart David Bloom",
      actor: "Kevin Sussman",
      job: "Comic Store Owner",
      image: "stuart.jpg",
    },
  ];
  const [query, setQuery] = useState("");
  const handleOnChange = (event) =>
  {
    setQuery(event.target.value);
  }
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const handleButtonClick = () =>{
    setFilteredCharacters(characters.filter(character => {
      return(character.name.toLowerCase().includes(query.toLowerCase()) || character.job.toLowerCase().includes(query.toLowerCase()) || character.actor.toLowerCase().includes(query.toLowerCase()))
    }))
  }
  return (
    <div className="App">
      <Header>Big Bang Theory Directory</Header>
      <CardList characters={filteredCharacters}>
        <input type="text" onChange={(event)=>{handleOnChange(event)}} value={query}/>
        <Button handleButtonClick={handleButtonClick} text="Filter" color="black" backgroundColor="lightskyblue">
  
        </Button>
      {/* map = forEach */}

      </CardList>
      {/* <Button text="Click Me!" color="black" backgroundColor="red">
        inside tag = children/html
      </Button> */}
    </div>
  );
}

export default App;
