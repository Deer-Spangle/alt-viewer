import React from "react";
import styles from "./ImageInputs.module.css";

interface ImageInputsProps {
    foregroundImg: string;
    backgroundImg: string;
    setForegroundImg: (img: string) => void;
    setBackgroundImg: (img: string) => void;
    updatePathImages: (fore: string, back: string) => void;
}

export const ImageInputs: React.FunctionComponent<ImageInputsProps> = (props) => {
    const {foregroundImg, backgroundImg, setForegroundImg, setBackgroundImg, updatePathImages} = props;

    return <div
        className={styles.ImageInputs}
    >
        <div className={styles.ImageInput}>
            <label htmlFor="ForegroundImg">
                Foreground<span className={styles.ExtraText}> Image</span>:
            </label>
            <input
                id="ForegroundImg"
                type="text"
                value={foregroundImg}
                onChange={(e) => {
                    setForegroundImg(e.target.value);
                    updatePathImages(e.target.value, backgroundImg);
                }}
            />
        </div>
        <div className={styles.ImageInput}>
            <label htmlFor="BackgroundImg">
                Background<span className={styles.ExtraText}> Image</span>:
            </label>
            <input
                id="BackgroundImg"
                type="text"
                value={backgroundImg}
                onChange={(e) => {
                    setBackgroundImg(e.target.value)
                    updatePathImages(foregroundImg, e.target.value);
                }}
            />
        </div>
    </div>
}
