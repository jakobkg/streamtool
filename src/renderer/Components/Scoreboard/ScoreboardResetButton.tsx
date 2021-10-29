import { MatchState } from "@interfaces/MatchState";

interface ScoreboardResetButtonProps {
    matchState: MatchState;
}

export function ScoreboardResetButton({ matchState }: ScoreboardResetButtonProps): JSX.Element {
    return (
        <div className="scoreboard-reset-button"
            onClick={() => {
                matchState.setScores.forEach((setScore) => { setScore(0); });
                matchState.setRound("");
                matchState.setTags.forEach((setTag) => { setTag(""); });
                matchState.setTeams.forEach((setTeam) => { setTeam(""); });
            }}>
            Reset
        </div>
    );
}