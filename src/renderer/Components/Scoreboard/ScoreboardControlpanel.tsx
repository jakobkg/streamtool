import { MatchLengthToggle } from './MatchLengthToggle';
import { ScoreResetButton } from './ScoreResetButton';

interface ScoreboardControlpanelProps {
    setScoresCallbacks: React.Dispatch<React.SetStateAction<number>>[];
    matchLength: number;
    setMatchLengthCallback: React.Dispatch<React.SetStateAction<number>>;
}

export function ScoreboardControlpanel({setScoresCallbacks, matchLength, setMatchLengthCallback}: ScoreboardControlpanelProps):JSX.Element {
    return (
        <div className='scoreboardcontrolpanel'>
            <MatchLengthToggle matchLength={3} currentMatchLength={matchLength} setMatchLengthCallback={setMatchLengthCallback} />
            <ScoreResetButton setScoresCallbacks={setScoresCallbacks} />
            <MatchLengthToggle matchLength={5} currentMatchLength={matchLength} setMatchLengthCallback={setMatchLengthCallback} />
        </div>
        
    );
}