export interface MatchState {
    teams: string[];
    setTeams: ((value: string, force?: boolean) => void)[];
    tags: string[];
    setTags: ((value: string, force?: boolean) => void)[];
    scores: number[];
    setScores: ((value: number, force?: boolean) => void)[];
    matchLength: number;
    setMatchLength: (value: number, force?: boolean) => void;
    round: string;
    setRound: (value: string, force?: boolean) => void;
}