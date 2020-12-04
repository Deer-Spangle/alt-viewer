import React from "react";
import {AltProps} from "./AltProps";
import styles from "./HorizontalSplitAlt.module.css";
import {HotlinkImage} from "../HotlinkImage";
import {useMouseLatest} from "../UseMouseLatest";


export const HorizontalSplitAlt: React.FunctionComponent<AltProps> = (props: AltProps) => {
    const {foregroundImg} = props;

    return (
        <div className={styles.Container}>
            <HotlinkImage
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
    const mouse = useMouseLatest(ref);

    return <div className={styles.ForegroundWrapper} ref={ref}>
        <div className={styles.ForegroundSlider} style={{
            "height": mouse.y || 0,
        }}>
            <HotlinkImage
                src={props.foregroundImg}
                className={styles.ImgForeground}
                alt="Foreground"
            />
        </div>
    </div>
}