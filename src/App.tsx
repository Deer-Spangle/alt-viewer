import React, {useState} from 'react';
import styles from './App.module.css';
import {ViewerSelector} from "./ViewerSelector";
import {useParams, useHistory} from "react-router-dom";

type AppPathParams = {
    foreground?: string;
    background?: string;
    /*viewer?: ViewerChoice;*/
}



export const App: React.FunctionComponent = () => {
    let params = useParams<AppPathParams>();
    let history = useHistory();
    let foregroundParam = params.foreground ? atob(params.foreground) : "https://i.imgur.com/8lyMaZH.png";
    let backgroundParam = params.background ? atob(params.background) : "https://i.imgur.com/7AdQO0r.png"
    const [foregroundImg, setForegroundImg] = useState(foregroundParam);
    const [backgroundImg, setBackgroundImg] = useState(backgroundParam);

    const updatePath = (fore: string, back: string) => {
        history.push(`/${btoa(fore)}/${btoa(back)}`);
    }

    return (
        <div className={styles.App}>
            <label>Foreground Image: <input
                type="text"
                value={foregroundImg}
                onChange={(e) => {
                    setForegroundImg(e.target.value);
                    updatePath(e.target.value, backgroundImg);
                }}
            /></label><br/>
            <label>Background Image: <input
                type="text"
                value={backgroundImg}
                onChange={(e) => {
                    setBackgroundImg(e.target.value)
                    updatePath(foregroundImg, e.target.value);
                }}
            /></label><br/>
            <ViewerSelector
                foregroundImg={foregroundImg}
                backgroundImg={backgroundImg}
            />
        </div>
    );
}
