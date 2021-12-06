import { MatchState } from "@/renderer/Interfaces/MatchState";
import { MatchLengthToggle } from "./MatchLengthToggle";
import { ScoreboardSwapButton } from "./ScoreboardSwapButton";
import { UpdateButton } from "./UpdateButton";

interface ScoreboardControlpanelProps {
    matchState: MatchState;
}

export function ScoreboardControlpanel({ matchState }: ScoreboardControlpanelProps):JSX.Element {
    return (
        <div className="scoreboardcontrolpanel gap-1">
            <div className="flex w-full gap-1">
                <MatchLengthToggle matchLength={3} currentMatchLength={matchState.matchLength} setMatchLengthCallback={matchState.setMatchLength} />
                <ScoreboardSwapButton matchState={matchState} />
                <MatchLengthToggle matchLength={5} currentMatchLength={matchState.matchLength} setMatchLengthCallback={matchState.setMatchLength} />
            </div>
            <UpdateButton />
        </div>
        
    );
}