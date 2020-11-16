import React from "react";
import styles from "./HoverAlt.module.css";
import {AltProps} from "./AltProps";


export const HoverAlt: React.FunctionComponent<AltProps> = (props: AltProps) => {

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