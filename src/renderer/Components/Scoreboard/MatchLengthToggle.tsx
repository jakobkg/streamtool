interface MatchLengthToggleProps {
    currentMatchLength: number;
    matchLength: number;
    setMatchLengthCallback: React.Dispatch<React.SetStateAction<number>>;
}

export function MatchLengthToggle({ currentMatchLength, matchLength, setMatchLengthCallback }: MatchLengthToggleProps): JSX.Element {
    return (
        <div className={"button scoreboardcontrolpanel-button".concat(currentMatchLength == matchLength ? " dark:bg-green-700 bg-green-500" : "")}
             onClick={() => {setMatchLengthCallback(matchLength);}}>
            Bo{matchLength}
        </div>
    );
}