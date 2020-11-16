import React from "react";
import {AltProps} from "./AltProps";
import styles from "./VerticalSplitAlt.module.css";
import useMouse from "@react-hook/mouse-position";


export const VerticalSplitAlt: React.FunctionComponent<AltProps> = (props: AltProps) => {
    const {foregroundImg} = props;
    return (
        <div className={styles.Container}>
            <img
                src={props.backgroundImg}
                className={styles.ImgBackground}
                alt="Background"
            />
            <ForegroundImg foregroundImg={foregroundImg} />
        </div>
    )
}

interface ForegroundProps {
    foregroundImg: string;
}

const ForegroundImg: React.FunctionComponent<ForegroundProps> = (props) => {
    const ref = React.useRef(null)
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100,
    })

    return <div className={styles.ForegroundWrapper} ref={ref}>
        <div className={styles.ForegroundSlider} style={{
            "width": mouse.x || 0,
        }}>
            <img
                src={props.foregroundImg}
                className={styles.ImgForeground}
                alt="Foreground"
            />
        </div>
    </div>
}