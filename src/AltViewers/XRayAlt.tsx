import React from "react";
import styles from "./XRayAlt.module.css";
import {AltProps} from "./AltProps";
import {HotlinkImage} from "../HotlinkImage";
import {MouseCoords, useMouseLatest} from "../UseMouseLatest";


export const XRayAlt: React.FunctionComponent<AltProps> = (props: AltProps) => {
    const ref = React.useRef(null);
    const mouse = useMouseLatest(ref);

    const circle = `circle(70px at ${mouse.x||0}px ${mouse.y||0}px`;

    return (
        <div className={styles.Container}>
            <HotlinkImage
                src={props.foregroundImg}
                className={styles.ImgForeground}
                alt="Foreground"
            />
            <div className={styles.BackgroundWrapper} ref={ref}>
                <div style={{
                    clipPath: circle
                }}>
                    <HotlinkImage
                        src={props.backgroundImg}
                        className={styles.ImgBackground}
                        alt="Background"
                    />
                </div>
                <XRayHint mouse={mouse}/>
            </div>
        </div>
    )
}

interface XRayHintProps {
    mouse: MouseCoords
}

const XRayHint: React.FunctionComponent<XRayHintProps> = (props) => {
    return <div
        className={styles.Hint}
        style={{
            left: props.mouse.x || 100,
            top: props.mouse.y || 100
        }}
    >
        <svg width="150px" height="150px" viewBox="0 0 150 150" style={{transform: "translate(-75px,-75px)"}}>
            <g>
                <circle cx="75" cy="75" r="70" strokeWidth="4" stroke="#FFFFFF" fill="none"/>
            </g>
        </svg>
    </div>
}