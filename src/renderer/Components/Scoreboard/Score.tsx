interface ScoreProps {
    score: number;
    updateScoreCallback: (value: number) => void;
    matchLength?: number;
}

export function Score({ score, updateScoreCallback, matchLength }: ScoreProps): JSX.Element {
    return (
        <div className="button score" onMouseDown={(e) => {
                if (e.nativeEvent.button == 0) {
                    score < (matchLength ? matchLength / 2 : 9) ? updateScoreCallback(score + 1) : () => {return;};
                } else {
                    score > 0 ? updateScoreCallback(score - 1) : () => {return;};
                }
            }}>
            {score}
        </div>
    );
}