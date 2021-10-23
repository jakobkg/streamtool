export default interface PlayerState {
    teams: string[];
    setTeams: React.Dispatch<React.SetStateAction<string>>[];
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<string>>[];
    scores: number[];
    setScores: React.Dispatch<React.SetStateAction<number>>[];
}