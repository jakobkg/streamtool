import React from "react";

interface ScoreResetButtonProps {
    setScoresCallbacks: React.Dispatch<React.SetStateAction<number>>[];
}

const ScoreResetButton = ({setScoresCallbacks}: ScoreResetButtonProps) => {
    
    return (
        <div className='scoreboardcontrolpanel-button score-reset-button'
            onClick={() => {
                setScoresCallbacks.forEach(setScoreCallback => {
                    setScoreCallback(0);
                });
            }}>
                0-0
            </div>
    )
}

export default ScoreResetButton;