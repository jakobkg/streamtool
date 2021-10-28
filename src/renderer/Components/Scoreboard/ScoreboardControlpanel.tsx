import { MatchState } from "@/renderer/Interfaces/MatchState";
import { MatchLengthToggle } from "./MatchLengthToggle";
import { ScoreboardResetButton } from "./ScoreboardResetButton";
import { UpdateButton } from "./UpdateButton";

interface ScoreboardControlpanelProps {
    matchState: MatchState;
}

export function ScoreboardControlpanel({ matchState }: ScoreboardControlpanelProps):JSX.Element {
    return (
        <div className="scoreboardcontrolpanel gap-1">
            <div className="flex w-full gap-1">
                <MatchLengthToggle matchLength={3} currentMatchLength={matchState.matchLength} setMatchLengthCallback={matchState.setMatchLength} />
                <ScoreboardResetButton matchState={matchState} />
                <MatchLengthToggle matchLength={5} currentMatchLength={matchState.matchLength} setMatchLengthCallback={matchState.setMatchLength} />
            </div>
            <UpdateButton />
        </div>
        
    );
}