import { useState, useEffect } from 'react';
import { monsters } from './monsters';
import EndScreen from './EndScreen';

import styles from './MonsterCard.module.css'

function NewMonsterCard({ seed, array }) {
    const [endGame, setEndGame] = useState(false)
    const [duel, setDuel] = useState(false)
    const [initialMonsters, finalMonsters] = useState(monsters)
    let leftMonster = chooseMonster(true)
    let rightMonster = chooseMonster(false)
    function vote(monster) {
        monster.currentPoints++
        setDuel(true)
    }
    useEffect(() => {
        if (duel == true) {
            setDuel(false);
        }
    }, [duel])
    function chooseMonster(boolean) {
        if (seed.length == 0) {
            if(array.length < 1) {
                declareEndGame()
                array.push(initialMonsters)
            }
            return
        }
        else {
            const duel = seed[0]
            let monster;
            if (boolean) {
                monster = monsters[duel[0]]
            }
            else {
                monster = monsters[duel[1]]
                seed.shift()
            }
            return monster
        }
    }
    function declareEndGame() {
        monsters.sort(compare)
        finalMonsters(monsters)
        setEndGame(true)
    }
    function compare(a, b) {
        return b.currentPoints - a.currentPoints;
    }
    function setImage(monster) {
        let name = monster.name.toLowerCase().split('');
        for (let i = 0; i < name.length; i++) {
            if (name[i] == " ") {
                name[i] = "_";
            }
        }
        name = name.join('')
        if (monster.iceborne) {
            monster.img = "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-" + name + "_icon.png"
            if(monster.name == 'Stygian Zinogre') {
                monster.img = "https://i.imgur.com/I96Wjqr.png"
            }
            return
        }
        monster.img = "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-" + name + "_icon.png"
    }
    if (leftMonster && rightMonster) {
        setImage(leftMonster)
        setImage(rightMonster);
    }
    return (
        <div>
            {endGame ?
            <EndScreen finalMonsters={monsters}/>
            :
            <div className={styles.container}>
            {leftMonster &&
                <div className={styles.monsterContainer}>
                    <h3>{leftMonster.name}</h3>
                    <img src={leftMonster.img} alt="Monster Icon" />
                    <p>Score: {leftMonster.currentPoints}</p>
                    <button className={styles.voteButton} onClick={() => vote(leftMonster)}>Vote</button>
                </div>
            }
            {rightMonster &&
                <div className={styles.monsterContainer}>
                    <h3>{rightMonster.name}</h3>
                    <img src={rightMonster.img} alt="Monster Icon" />
                    <p>Score: {rightMonster.currentPoints}</p>
                    <button className={styles.voteButton} onClick={() => vote(rightMonster)}>Vote</button>
                </div>
            }
        </div>}
        </div>
    );
}

export default NewMonsterCard;