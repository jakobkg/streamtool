interface MatchLengthToggleProps {
    currentMatchLength: number;
    matchLength: number;
    setMatchLengthCallback: React.Dispatch<React.SetStateAction<number>>;
}

export function MatchLengthToggle({ currentMatchLength, matchLength, setMatchLengthCallback }: MatchLengthToggleProps): JSX.Element {
    return (
        <div className={"button scoreboardcontrolpanel-button".concat(currentMatchLength == matchLength ? " bg-green-800" : "")}
             onClick={() => {setMatchLengthCallback(matchLength);}}>
            Bo{matchLength}
        </div>
    );
}