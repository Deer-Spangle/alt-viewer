import React, {useState} from "react";
import {AltProps} from "./AltViewers/AltProps";
import {HoverAlt} from "./AltViewers/HoverAlt";
import {VerticalSplitAlt} from "./AltViewers/VerticalSplitAlt";
import {HorizontalSplitAlt} from "./AltViewers/HorizontalSplitAlt";

enum ViewerChoice {
    hover,
    verticalSplit,
    horizontalSplit
}

export const ViewerSelector: React.FunctionComponent<AltProps> = (props) => {
    const [choice, setChoice] = useState(ViewerChoice.hover);

    let viewer = HoverAlt(props);
    if (choice === ViewerChoice.verticalSplit)
        viewer = VerticalSplitAlt(props);
    if (choice === ViewerChoice.horizontalSplit)
        viewer = HorizontalSplitAlt(props);

    return (
        <div>
            <div>
                Select viewer:
                <label>Hover
                    <input
                        type="radio"
                        checked={choice === ViewerChoice.hover}
                        onChange={() => {
                            setChoice(ViewerChoice.hover)
                        }}
                    />
                </label>
                <label>Vertical split
                    <input
                        type="radio"
                        checked={choice === ViewerChoice.verticalSplit}
                        onChange={() => {
                            setChoice(ViewerChoice.verticalSplit)
                        }}
                    />
                </label>
                <label>Horizontal split
                    <input
                        type="radio"
                        checked={choice === ViewerChoice.horizontalSplit}
                        onChange={() => {
                            setChoice(ViewerChoice.horizontalSplit)
                        }}
                    />
                </label>
            </div>
            {viewer}
        </div>
    )
}