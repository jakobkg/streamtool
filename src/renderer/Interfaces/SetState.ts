import React from "react";

export default interface SetState {
    teams: string[];
    setTeams: React.Dispatch<React.SetStateAction<string>>[];
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<string>>[];
    scores: number[];
    setScores: React.Dispatch<React.SetStateAction<number>>[];
    matchLength: number;
    setMatchLength: React.Dispatch<React.SetStateAction<number>>;
    round: string;
    setRound: React.Dispatch<React.SetStateAction<string>>;
    darkmode: boolean;
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}