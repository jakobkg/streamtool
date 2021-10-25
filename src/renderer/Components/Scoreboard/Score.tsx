import React from "react";

interface ScoreProps {
    score: number;
    updateScoreCallback: React.Dispatch<React.SetStateAction<number>>;
    matchLength?: number;
}

const Score = ({ score, updateScoreCallback, matchLength }: ScoreProps) => {
    return (
        <div className='score' onMouseDown={(e) => {
                if (e.nativeEvent.button == 0) {
                    score < (matchLength ? matchLength / 2 : 9) ? updateScoreCallback(score + 1) : () => {};
                } else {
                    score > 0 ? updateScoreCallback(score - 1) : () => {};
                }
            }}>
            {score}
        </div>
    )
}

export default Score;