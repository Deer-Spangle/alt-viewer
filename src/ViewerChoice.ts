export enum ViewerChoice {
    hover="hover",
    verticalSplit="vertical",
    horizontalSplit="horizontal"
}

export function stringToChoice(choice: string) {
    const typedColorString = choice as keyof typeof ViewerChoice;
    return ViewerChoice[typedColorString];
}
