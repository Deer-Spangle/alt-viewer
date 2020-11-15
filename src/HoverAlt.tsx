import React from "react";
import styles from "./HoverAlt.module.css";

interface HoverAltProps {
    foregroundImg: string;
    backgroundImg: string;
}

export const HoverAlt: React.FunctionComponent<HoverAltProps> = (props: HoverAltProps) => {

    return (
        <div className={styles.Container}>
            <img
                src={props.backgroundImg}
                className={styles.ImgBackground}
                alt="Background"
            />
            <img
                src={props.foregroundImg}
                className={styles.ImgForeground}
                alt="Foreground"
            />
        </div>
    )
}