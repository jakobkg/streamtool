import React from "react";
import Score from './Score';
import ScoreboardControlpanel from './ScoreboardControlpanel';

interface ScoreboardProps {
    scores: number[];
    setScoresCallbacks: React.Dispatch<React.SetStateAction<number>>[];
    matchLength: number;
    setMatchLengthCallback: React.Dispatch<React.SetStateAction<number>>;
}

const Scoreboard = ({ scores, setScoresCallbacks, matchLength, setMatchLengthCallback }: ScoreboardProps) => {
    return (
    <div className='scoreboard-container'>
        <div className='scores-container'>  
            <Score score={scores[0]} updateScoreCallback={setScoresCallbacks[0]} matchLength={matchLength} />
            -
            <Score score={scores[1]} updateScoreCallback={setScoresCallbacks[1]} matchLength={matchLength} />
    </div>
    <ScoreboardControlpanel setScoresCallbacks={setScoresCallbacks} matchLength={matchLength} setMatchLengthCallback={setMatchLengthCallback} />
    </div>
    )
}

export default Scoreboard;