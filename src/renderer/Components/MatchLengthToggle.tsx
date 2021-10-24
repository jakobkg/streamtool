import React from "react";

interface MatchLengthToggleProps {
    currentMatchLength: number;
    matchLength: number;
    setMatchLengthCallback: React.Dispatch<React.SetStateAction<number>>;
}

const MatchLengthToggle = ({ currentMatchLength, matchLength, setMatchLengthCallback }: MatchLengthToggleProps) => {
    return (
        <div className={'scoreboardcontrolpanel-button'.concat(currentMatchLength == matchLength ? ' bg-gray-400' : '')}
             onClick={() => {setMatchLengthCallback(matchLength)}}>
            Bo{matchLength}
        </div>
    )
}

export default MatchLengthToggle;