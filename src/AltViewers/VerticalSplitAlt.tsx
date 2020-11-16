import React from "react";
import {AltProps} from "./AltProps";
import styles from "./VerticalSplitAlt.module.css";
import ReactCursorDetection, {ICursorDetectionPassThroughProps} from "react-cursor-detection";


export const VerticalSplitAlt: React.FunctionComponent<AltProps> = (props: AltProps) => {
    const {foregroundImg} = props;
    return (
        <div className={styles.Container}>
            <img
                src={props.backgroundImg}
                className={styles.ImgBackground}
                alt="Background"
            />
            <ReactCursorDetection>
                {(props) => <ForegroundImg foregroundImg={foregroundImg} {...props}/>}
            </ReactCursorDetection>
        </div>
    )
}

interface ForegroundProps extends ICursorDetectionPassThroughProps {
    foregroundImg: string;
}

const ForegroundImg: React.FunctionComponent<ForegroundProps> = (props) => {
    return <div className={styles.ForegroundWrapper}>
        <div className={styles.ForegroundSlider} style={{
            "width": props.position.x,
        }}>
            <img
                src={props.foregroundImg}
                className={styles.ImgForeground}
                alt="Foreground"
            />
        </div>
    </div>
}