import './App.css'
import NewMonsterCard from './components/NewMonsterCard';
import { useState } from 'react';

let monsterArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69];

function App() {
  const [initialMonsters, finalMonsters] = useState([])
  function createPseudoSequence() {
    let array = [];
    for (let i = 0; i < monsterArray.length; i++) {
      for (let k = i + 1; k < monsterArray.length; k++) {
        array.push([i, k])
      }
      shuffle(array)
    }
    array = array.slice(0, array.length / 10)
    return array;
  }
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  const seed = createPseudoSequence();
  return (
    <div className="App">
        <div>
          <h1>Favorite Monster Selector</h1>
          <div className="monsterSelection">
            <NewMonsterCard seed={seed} array={initialMonsters} />
          </div>
        </div>
    </div>
  )
}

export default App
