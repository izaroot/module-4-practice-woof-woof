import React, { useEffect, useState } from 'react';
import './App.css';
import DogBar from './DogBar'
import DogInfo from './DogInfo'

function App() {

  const [dogs, setDogs] = useState([])
  const [dogInfo, setDogInfo] = useState({})
  const [filter, setFilter] = useState(false)
  
  useEffect(() => {
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(dogs => {
        setDogs(dogs)
    })
  }, [])

  const handleClick = (dogObj) => {
    setDogInfo(dogObj)
  }

  const handleGoodBad = (dogObj) => {
    console.log("was clicked")
    let index = dogs.findIndex(dog => dog.id === dogObj.id)
    console.log(index)
    fetch(`http://localhost:3000/pups/${dogObj.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        isGoodDog: !dogObj.isGoodDog
      })
    })
    .then(resp => resp.json())
    .then(updatedDog => {
        // console.log(updatedDog)
        let copyDogs = [...dogs]
        copyDogs[index].isGoodDog = updatedDog.isGoodDog
        setDogs(copyDogs)
    })
  }

  const filteredDogs = filter ? dogs.filter(dog => dog.isGoodDog === filter) : dogs;

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => setFilter(!filter)}>Filter good dogs: {!filter ? "OFF" : "ON"}</button>
      </div>
      <div id="dog-bar">
          <DogBar dogs={filteredDogs} handleClick={handleClick} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo dogObj={dogInfo} handleGoodBad={handleGoodBad} />
        </div>
      </div>
    </div>
  );
}

export default App;
