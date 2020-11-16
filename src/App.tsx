import React, {useState} from 'react';
import styles from './App.module.css';
import {ViewerSelector} from "./ViewerSelector";
import {useParams, useHistory} from "react-router-dom";
import {stringToChoice, ViewerChoice} from "./ViewerChoice";

type AppPathParams = {
    foreground?: string;
    background?: string;
    viewer?: string;
}

const defaultFore = "https://i.imgur.com/8lyMaZH.png";
const defaultBack = "https://i.imgur.com/7AdQO0r.png";


export const App: React.FunctionComponent = () => {
    let params = useParams<AppPathParams>();
    let history = useHistory();
    let foregroundParam = params.foreground ? atob(params.foreground) : defaultFore;
    let backgroundParam = params.background ? atob(params.background) : defaultBack;
    let choiceParam: ViewerChoice = params.viewer ? stringToChoice(params.viewer) : ViewerChoice.hover;
    const [foregroundImg, setForegroundImg] = useState(foregroundParam);
    const [backgroundImg, setBackgroundImg] = useState(backgroundParam);
    const [choice, setChoice] = useState(choiceParam);

    const updatePath = (choice: ViewerChoice, fore: string, back: string) => {
        if(fore && back && (fore !== defaultFore || back !== defaultBack)) {
            history.push(`/${choice}/${btoa(fore)}/${btoa(back)}`);
            return;
        }
        history.push(`/${choice}`)
    }

    const updateChoice = (newChoice: ViewerChoice) => {
        setChoice(newChoice);
        updatePath(newChoice, foregroundImg, backgroundImg);
    }

    return (
        <div className={styles.App}>
            <label>Foreground Image: <input
                type="text"
                value={foregroundImg}
                onChange={(e) => {
                    setForegroundImg(e.target.value);
                    updatePath(choice, e.target.value, backgroundImg);
                }}
            /></label><br/>
            <label>Background Image: <input
                type="text"
                value={backgroundImg}
                onChange={(e) => {
                    setBackgroundImg(e.target.value)
                    updatePath(choice, foregroundImg, e.target.value);
                }}
            /></label><br/>
            <ViewerSelector
                foregroundImg={foregroundImg}
                backgroundImg={backgroundImg}
                choice={choice}
                setChoice={updateChoice}
            />
        </div>
    );
}
