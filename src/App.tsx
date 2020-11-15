import React, {useState} from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import {HoverAlt} from "./HoverAlt";


const App: React.FunctionComponent = () => {

    const [foregroundImg, setForegroundImg] = useState("");
    const [backgroundImg, setBackgroundImg] = useState("");

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
            <HoverAlt
                foregroundImg={foregroundImg}
                backgroundImg={backgroundImg}
            />
            <header className={styles.AppHeader}>
                <img src={logo} className={styles.AppLogo} alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

                <a
                    className={styles.AppLink}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
