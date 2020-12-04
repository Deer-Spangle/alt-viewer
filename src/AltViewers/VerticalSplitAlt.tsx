import React from "react";
import {AltProps} from "./AltProps";
import styles from "./VerticalSplitAlt.module.css";
import {HotlinkImage} from "../HotlinkImage";
import {useMouseLatest} from "../UseMouseLatest";
import useSize from "@react-hook/size";


export const VerticalSplitAlt: React.FunctionComponent<AltProps> = (props: AltProps) => {
    const {foregroundImg} = props;
    return (
        <div className={styles.Container}>
            <HotlinkImage
                src={props.backgroundImg}
                className={styles.ImgBackground}
                alt="Background"
            />
            <ForegroundImg foregroundImg={foregroundImg}/>
        </div>
    )
}

interface ForegroundProps {
    foregroundImg: string;
}

const ForegroundImg: React.FunctionComponent<ForegroundProps> = (props) => {
    const ref = React.useRef(null)
    const mouse = useMouseLatest(ref)
    const [, height] = useSize(ref);

    return <div className={styles.ForegroundWrapper} ref={ref}>
        <div className={styles.ForegroundSliderWrapper} style={{
            "width": mouse.x || 100,
        }}>
            <VerticalSplitHint height={height} />
            <div className={styles.ForegroundSlider}>
                <HotlinkImage
                    src={props.foregroundImg}
                    className={styles.ImgForeground}
                    alt="Foreground"
                />
            </div>
        </div>
    </div>
}

interface VerticalSplitHintProps {
    height: number;
}

const VerticalSplitHint: React.FunctionComponent<VerticalSplitHintProps> = (props) => {
    // Can't just set height 100%, as that leads to a bug in chrome where the mask does not resize after the image loads
    const {height} = props;

    return <div className={styles.SliderHint}>
        <svg width="100" height={height}>
            <mask id="mask" height="200%" width="200%">
                <rect x="-50%" y="-50%" width="100%" height="100%" fill="white"/>
                <rect x="-30" y="-30" width="60" height="60" fill="black"/>
            </mask>
            <g style={{transform:"translate(50%,50%)"}}>
                <g mask="url(#mask)">
                    <line x1="0" y1="-50%" x2="0" y2="50%" stroke="rgba(255,255,255,.9)" strokeWidth="4"/>
                    <line x1="-5" y1="0" x2="5" y2="0" stroke="rgba(255,255,255,.9)" strokeWidth="2"/>
                </g>
                <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="4"/>
                <path
                    d="M-10,-10 L-20,0 L-10,10 M10,-10 L20,0 L10,10"
                    id="Path"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    fill="none"
                />
            </g>
        </svg>
    </div>
}
