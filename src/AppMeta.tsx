import React from "react";
import MetaTags from "react-meta-tags";

interface MetaProps {
    backgroundImg: string,
    foregroundImg: string,
    choice: string
}

export const AppMeta: React.FunctionComponent<MetaProps> = (props) => {
    const {backgroundImg, foregroundImg, choice} = props;

    return <div>
        <MetaTags>
            <title>Alt viewer: {choice} mode</title>
            <meta id="meta-description" name="description" content="Image comparison tool: View and compare image alts" />
            <meta id="og-title" property="og:title" content={`Alt viewer: ${choice} mode`} />
            <meta id="og-image" property="og:image" content={backgroundImg} />
            <meta id="og-image" property="og:image" content={foregroundImg} />
        </MetaTags>
    </div>
}