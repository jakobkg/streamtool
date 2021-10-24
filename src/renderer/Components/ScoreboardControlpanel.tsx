import React from 'react';
import MatchLengthToggle from './MatchLengthToggle';
import ScoreResetButton from './ScoreResetButton';

interface ScoreboardControlpanelProps {
    setScoresCallbacks: React.Dispatch<React.SetStateAction<number>>[];
    matchLength: number;
    setMatchLengthCallback: React.Dispatch<React.SetStateAction<number>>;
}

const ScoreboardControlpanel = ({setScoresCallbacks, matchLength, setMatchLengthCallback}: ScoreboardControlpanelProps) => {
    return (
        <div className='scoreboardcontrolpanel'>
            <MatchLengthToggle matchLength={3} currentMatchLength={matchLength} setMatchLengthCallback={setMatchLengthCallback} />
            <ScoreResetButton setScoresCallbacks={setScoresCallbacks} />
            <MatchLengthToggle matchLength={5} currentMatchLength={matchLength} setMatchLengthCallback={setMatchLengthCallback} />
        </div>
        
    )
}

export default ScoreboardControlpanel;