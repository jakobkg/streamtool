import React from "react";

interface ScoreboardProps {
    scores: number[];
    setScoresCallback: React.Dispatch<React.SetStateAction<number>>;
}

const Scoreboard = ({ scores, setScoresCallback }: ScoreboardProps) => {
    return (
    <div>
        {scores[0]} - {scores[1]}
    </div>
    )
}