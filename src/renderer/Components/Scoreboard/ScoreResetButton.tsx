interface ScoreResetButtonProps {
    setScoresCallbacks: React.Dispatch<React.SetStateAction<number>>[];
}

export function ScoreResetButton({setScoresCallbacks}: ScoreResetButtonProps): JSX.Element {
    
    return (
        <div className='scoreboardcontrolpanel-button score-reset-button'
            onClick={() => {
                setScoresCallbacks.forEach(setScoreCallback => {
                    setScoreCallback(0);
                });
            }}>
            0-0
        </div>
    );
}