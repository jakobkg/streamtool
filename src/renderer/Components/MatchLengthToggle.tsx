import React from "react";

interface MatchLengthToggleProps {
    matchLength: number;
    setMatchLengthCallback: React.Dispatch<React.SetStateAction<number>>;
}

const MatchLengthToggle = ({ matchLength, setMatchLengthCallback }: MatchLengthToggleProps) => {
    return (
        <div className='matchlengthtoggle-container'>
            <div className={'matchlengthtoggle-button'.concat(matchLength == 3 ? ' bg-gray-400' : '')} onClick={() => {setMatchLengthCallback(3)}}>
                Bo3
            </div>
            <div className={'matchlengthtoggle-button'.concat(matchLength == 5 ? ' bg-gray-400' : '')} onClick={() => {setMatchLengthCallback(5)}}>
                Bo5
            </div>
        </div>
    )
}

export default MatchLengthToggle;