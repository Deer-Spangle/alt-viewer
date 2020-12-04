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
            "height": mouse.y || 100,
        }}>
            <HotlinkImage
                src={props.foregroundImg}
                className={styles.ImgForeground}
                alt="Foreground"
            />
        </div>
        <HorizontalSplitHint />
    </div>
}

const HorizontalSplitHint: React.FunctionComponent = () => {
    return <div className={styles.SliderHint}>
        <svg width="100vw" height="100">
            <mask id="mask" width="200%" height="200%">
                <rect x="-50%" y="-50%" width="100%" height="100%" fill="white"/>
                <rect x="-30" y="-30" width="60" height="60" fill="black"/>
            </mask>
            <g style={{transform:"translate(50%,50%)"}}>
                <g mask="url(#mask)">
                    <line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(255,255,255,.9)" strokeWidth="2"/>
                    <line x1="-50%" y1="0" x2="50%" y2="0" stroke="rgba(255,255,255,.9)" strokeWidth="4"/>
                </g>
                <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="4"/>
                <path
                    d="M-10,-10 L0,-20 L10,-10 M-10,10 L0,20 L10,10"
                    id="Path"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    fill="none"
                />
            </g>
        </svg>
    </div>
}
