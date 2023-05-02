import styles from './EndScreen.module.css'

function EndScreen({ finalMonsters }) {
    let counter = 0;
    console.log(finalMonsters)
    function returnInfo(monster) {
        counter++
        if(counter < 4) {
            return;
        }
        return (
            <div>
                <p>{counter + "º"}</p>
                <h4>{monster.name}</h4>
                <img src={monster.img}/>
            </div>
        )
    }
    return (
        <div>
            <h1>THE END!</h1>
            <div className={styles.podium}>
                <div className={styles.firstPlace}>
                    <h2>First Place<br></br> {finalMonsters[0].name}</h2>
                    <img src={finalMonsters[0].img} />
                    <p>{finalMonsters[0].currentPoints} Points</p>
                </div>
                <div className={styles.secondPlace}>
                    <h2>Second Place<br></br> {finalMonsters[1].name}</h2>
                    <img src={finalMonsters[1].img} />
                    <p>{finalMonsters[1].currentPoints} Points</p>
                </div>
                <div className={styles.thirdPlace}>
                    <h2>Third Place<br></br> {finalMonsters[2].name}</h2>
                    <img src={finalMonsters[2].img} />
                    <p>{finalMonsters[2].currentPoints} Points</p>
                </div>
            </div>
            <div className={styles.others}>
                {finalMonsters &&
                finalMonsters.map((monster) => returnInfo(monster))}
            </div>
        </div>
    );
}

export default EndScreen;