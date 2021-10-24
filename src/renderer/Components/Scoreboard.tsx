import React from "react";
import Score from './Score';
import ScoreResetButton from './ScoreResetButton';
import MatchLengthToggle from './MatchLengthToggle';

interface ScoreboardProps {
    scores: number[];
    setScoresCallbacks: React.Dispatch<React.SetStateAction<number>>[];
    matchLength: number;
    setMatchLengthCallback: React.Dispatch<React.SetStateAction<number>>;
}

const Scoreboard = ({ scores, setScoresCallbacks, matchLength, setMatchLengthCallback }: ScoreboardProps) => {
    return (
    <div className='scoreboard-container'>
        <MatchLengthToggle matchLength={matchLength} setMatchLengthCallback={setMatchLengthCallback} />
        <div className='scores-container'>  
            <Score score={scores[0]} updateScoreCallback={setScoresCallbacks[0]} matchLength={matchLength} />
            -
            <Score score={scores[1]} updateScoreCallback={setScoresCallbacks[1]} matchLength={matchLength} />
    </div>
    <ScoreResetButton setScoresCallbacks={setScoresCallbacks} />
    </div>
    )
}

export default Scoreboard;