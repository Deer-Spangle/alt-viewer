export enum ViewerChoice {
    hover="hover",
    verticalSplit="vertical",
    horizontalSplit="horizontal"
}

export function stringToChoice(choice: string) {
    let keys = Object.keys(ViewerChoice).filter(
        x => ViewerChoice[x as keyof typeof ViewerChoice] === choice
    );
    return keys.length > 0 ? ViewerChoice[keys[0] as keyof typeof ViewerChoice] : ViewerChoice.hover;
}
