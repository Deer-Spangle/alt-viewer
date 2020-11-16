import React from "react";
import {AltProps} from "./AltViewers/AltProps";
import {HoverAlt} from "./AltViewers/HoverAlt";
import {VerticalSplitAlt} from "./AltViewers/VerticalSplitAlt";
import {HorizontalSplitAlt} from "./AltViewers/HorizontalSplitAlt";
import {ViewerChoice} from "./ViewerChoice";
import styles from "./ViewerSelector.module.css";
import classnames from "classnames";

interface ViewerSelectorProps extends AltProps {
    choice: ViewerChoice;
    setChoice: (choice: ViewerChoice) => void;
}

export const ViewerSelector: React.FunctionComponent<ViewerSelectorProps> = (props) => {
    const {choice, setChoice} = props;

    let viewer = HoverAlt(props);
    if (choice === ViewerChoice.verticalSplit)
        viewer = VerticalSplitAlt(props);
    if (choice === ViewerChoice.horizontalSplit)
        viewer = HorizontalSplitAlt(props);

    return (
        <div>
            <div>
                <div
                    className={classnames(
                        styles.Option,
                        {
                            [styles.Selected]: choice === ViewerChoice.hover
                        }
                    )}
                    onClick={() => {
                        setChoice(ViewerChoice.hover)
                    }}
                >
                    Hover
                </div>
                <div
                    className={classnames(
                        styles.Option,
                        {
                            [styles.Selected]: choice === ViewerChoice.verticalSplit
                        }
                    )}
                    onClick={() => {
                        setChoice(ViewerChoice.verticalSplit)
                    }}
                >
                    Vertical split
                </div>
                <div
                    className={classnames(
                        styles.Option,
                        {
                            [styles.Selected]: choice === ViewerChoice.horizontalSplit
                        }
                    )}
                    onClick={() => {
                        setChoice(ViewerChoice.horizontalSplit)
                    }}
                >
                    Horizontal split
                </div>
            </div>
            {viewer}
        </div>
    )
}