import React, {useState} from "react";
import {AltProps} from "./AltViewers/AltProps";
import {HoverAlt} from "./AltViewers/HoverAlt";
import {VerticalSplitAlt} from "./AltViewers/VerticalSplitAlt";

enum ViewerChoice {
    hover,
    verticalSplit
}

export const ViewerSelector: React.FunctionComponent<AltProps> = (props) => {
    const [choice, setChoice] = useState(ViewerChoice.hover);

    let viewer = HoverAlt(props);
    if (choice === ViewerChoice.verticalSplit)
        viewer = VerticalSplitAlt(props);

    return (
        <div>
            <div>
                Select viewer:
                <label>Hover
                    <input
                        type="radio"
                        checked={choice === ViewerChoice.hover}
                        onChange={(e) => {
                            setChoice(ViewerChoice.hover)
                        }}
                    />
                </label>
                <label>Vertical split
                    <input
                        type="radio"
                        checked={choice === ViewerChoice.verticalSplit}
                        onChange={(e) => {
                            setChoice(ViewerChoice.verticalSplit)
                        }}
                    />
                </label>
            </div>
            {viewer}
        </div>
    )
}