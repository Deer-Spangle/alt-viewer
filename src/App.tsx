import React, {useState} from 'react';
import styles from './App.module.css';
import {ViewerSelector} from "./ViewerSelector";


const App: React.FunctionComponent = () => {

    const [foregroundImg, setForegroundImg] = useState("https://i.imgur.com/8lyMaZH.png");
    const [backgroundImg, setBackgroundImg] = useState("https://i.imgur.com/7AdQO0r.png");

    return (
        <div className={styles.App}>
            <label>Foreground Image: <input
                type="text"
                value={foregroundImg}
                onChange={(e) => {
                    setForegroundImg(e.target.value)
                }}
            /></label><br/>
            <label>Background Image: <input
                type="text"
                value={backgroundImg}
                onChange={(e) => {
                    setBackgroundImg(e.target.value)
                }}
            /></label><br/>
            <ViewerSelector
                foregroundImg={foregroundImg}
                backgroundImg={backgroundImg}
            />
        </div>
    );
}

export default App;
