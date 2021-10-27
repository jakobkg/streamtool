interface MatchLengthToggleProps {
    currentMatchLength: number;
    matchLength: number;
    setMatchLengthCallback: React.Dispatch<React.SetStateAction<number>>;
}

export function MatchLengthToggle({ currentMatchLength, matchLength, setMatchLengthCallback }: MatchLengthToggleProps): JSX.Element {
    return (
        <div className={'scoreboardcontrolpanel-button'.concat(currentMatchLength == matchLength ? ' bg-gray-400' : '')}
             onClick={() => {setMatchLengthCallback(matchLength)}}>
            Bo{matchLength}
        </div>
    )
}