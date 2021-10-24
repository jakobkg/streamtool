import React from 'react';

interface ScoreResetButtonProps {
    setScoresCallbacks: React.Dispatch<React.SetStateAction<number>>[];
}

const ScoreResetButton = ({setScoresCallbacks}: ScoreResetButtonProps) => {
    return (
        <div className='score-reset-button bg-gray-800 text-sm text-center cursor-pointer font-bold rounded-md w-1/3'
            onClick={() => {
                setScoresCallbacks.forEach(setScoreCallback => {
                    setScoreCallback(0);
                });
            }}>0-0</div>
    )
}

export default ScoreResetButton;