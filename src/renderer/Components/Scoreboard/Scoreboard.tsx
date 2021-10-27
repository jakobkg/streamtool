import { MatchState } from "@/renderer/Interfaces/MatchState";
import { Score } from "./Score";
import { ScoreboardControlpanel } from "./ScoreboardControlpanel";

interface ScoreboardProps {
    matchState: MatchState;
}

export function Scoreboard({ matchState }: ScoreboardProps): JSX.Element {
    return (
    <div className="scoreboard-container">
        <div className="scores-container">  
            <Score score={matchState.scores[0]} updateScoreCallback={matchState.setScores[0]} matchLength={matchState.matchLength} />
            -
            <Score score={matchState.scores[1]} updateScoreCallback={matchState.setScores[1]} matchLength={matchState.matchLength} />
    </div>
    <ScoreboardControlpanel matchState={matchState} />
    </div>
    );
}