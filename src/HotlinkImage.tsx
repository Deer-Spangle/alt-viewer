import React, {useState} from "react";

interface ImageProps {
    src: string
    className: string
    alt: string
}

export const HotlinkImage: React.FunctionComponent<ImageProps> = (props) => {
    const [src, setSrc] = useState(props.src);

    return (
        <img
            src={src}
            className={props.className}
            alt={props.alt}
            onError={() => {setSrc(`https://hotlink.spangle.org.uk/img/${btoa(props.src)}`)}}
        />
    )
}