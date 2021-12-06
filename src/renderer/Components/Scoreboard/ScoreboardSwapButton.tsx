import { MatchState } from "@interfaces/MatchState";
import { IoMdSwap } from "react-icons/io";

interface ScoreboardSwapButtonProps {
    matchState: MatchState;
}

export function ScoreboardSwapButton({ matchState }: ScoreboardSwapButtonProps): JSX.Element {
    return (
        <div className="scoreboard-swap-button"
            onClick={() => {
                const tmpScores = matchState.scores;
                const tmpTags = matchState.tags;
                const tmpTeams = matchState.teams;
                matchState.setScores[0](tmpScores[1]);
                matchState.setScores[1](tmpScores[0]);
                matchState.setTags[0](tmpTags[1]);
                matchState.setTags[1](tmpTags[0]);
                matchState.setTeams[0](tmpTeams[1]);
                matchState.setTeams[1](tmpTeams[0]);
            }}>
            <IoMdSwap size="20" />
        </div>
    );
}