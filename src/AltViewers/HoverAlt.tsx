import React from "react";
import styles from "./HoverAlt.module.css";
import {AltProps} from "./AltProps";
import {HotlinkImage} from "../HotlinkImage";


export const HoverAlt: React.FunctionComponent<AltProps> = (props: AltProps) => {

    return (
        <div className={styles.Container}>
            <HotlinkImage
                src={props.backgroundImg}
                className={styles.ImgBackground}
                alt="Background"
            />
            <HotlinkImage
                src={props.foregroundImg}
                className={styles.ImgForeground}
                alt="Foreground"
            />
        </div>
    )
}