import { matchState } from "../App";

export function updateObsFiles(): void {
    const fields = document.getElementsByClassName("textbox");
    const fieldsArray: string[] = [];

    for (let index = 0; index < fields.length; index++) {
        const element = fields.item(index) as HTMLInputElement;
        fieldsArray.push(element.value);
    }

    matchState.setRound(fieldsArray[0], true);
    matchState.setTeams[0](fieldsArray[1], true);
    matchState.setTeams[1](fieldsArray[3], true);
    matchState.setTags[0](fieldsArray[2], true);
    matchState.setTags[1](fieldsArray[4], true);

    const scores = document.getElementsByClassName("score");

    for (let index = 0; index < scores.length; index++) {
        const score = scores.item(index) as HTMLDivElement;
        matchState.setScores[index](Number.parseInt(score.innerHTML), true);
    }
}
