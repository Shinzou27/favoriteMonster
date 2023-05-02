import { useState, useEffect } from 'react';
import { monsters } from './monsters';

import styles from './MonsterCard.module.css'


function MonsterCard({monsterArray}) {
    let monster = chooseMonster()
    const [points, setPoints] = useState(monster.currentPoints);
    function vote() {
        setPoints(() => points + 1)
        monster.currentPoints++
    }
    useEffect(() => {
        setPoints(monster.currentPoints)
    }, [])
    function setImage() {
        let name = monster.name.toLowerCase().split('');
        for (let i = 0; i < name.length; i++) {
            if (name[i] == " ") {
                name[i] = "_";
            }
        }
        name = name.join('')
        if (monster.iceborne) {
            monster.img = "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-" + name + "_icon.png"
            if(monster.name = 'Stygian Zinogre') {
                monster.img = "https://static.wikia.nocookie.net/monsterhunter/images/f/f3/MHWI-Stygian_Zinogre_Icon.png/revision/latest?cb=20210724012446"
            }
            return
        }
        monster.img = "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-" + name + "_icon.png"
    }
    function compare(a, b) {
        return b.currentPoints - a.currentPoints;
    }
    function restoreArray() {
        for (let i = 0; i < 10; i++) {
            monsterArray.push(i)
        }
        //monsterArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
    }
    function chooseMonster() {
        console.log(monsterArray.length)
        if (monsterArray.length == 0) {
            console.log("fim da linha")
            monsters.sort(compare)
            restoreArray()
        }
        const monster = monsters[monsterArray.shift()];
        console.log(monsters)
        return monster
    }
    setImage()
    return (
        <div className={styles.container}>
            <h3>{monster.name}</h3>
            <img src={monster.img} alt="Monster Icon" />
            <p>Score: {monster.currentPoints}</p>
            <button className={styles.voteButton} onClick={vote}>Vote</button>
        </div>
    );
}

export default MonsterCard;