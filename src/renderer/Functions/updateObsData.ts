import { appConfig, matchState } from "../App";

export function updateObsData(): void {
    if (appConfig.obs.legacyMode) {
        window.electron.saveFile(appConfig.obs.outputDir.concat("/player1.txt"), matchState.tags[0]);
        window.electron.saveFile(appConfig.obs.outputDir.concat("/player2.txt"), matchState.tags[1]);

        window.electron.saveFile(appConfig.obs.outputDir.concat("/score1.txt"), String(matchState.scores[0]));
        window.electron.saveFile(appConfig.obs.outputDir.concat("/score2.txt"), String(matchState.scores[1]));

        window.electron.saveFile(appConfig.obs.outputDir.concat("/team1.txt"), matchState.teams[0]);
        window.electron.saveFile(appConfig.obs.outputDir.concat("/team2.txt"), matchState.teams[1]);

        window.electron.saveFile(appConfig.obs.outputDir.concat("/round.txt"), matchState.round);
        
        return;
    } else {
        window.obs.isConnected()
        .then((isConnected) => {
            if (isConnected) {
                window.obs.setTextSourceContents(appConfig.obs.websocket.sourceNames.p1Score, String(matchState.scores[0]));
                window.obs.setTextSourceContents(appConfig.obs.websocket.sourceNames.p2Score, String(matchState.scores[1]));

                window.obs.setTextSourceContents(appConfig.obs.websocket.sourceNames.p1Tag, String(matchState.tags[0]));
                window.obs.setTextSourceContents(appConfig.obs.websocket.sourceNames.p2Tag, String(matchState.tags[1]));

                window.obs.setTextSourceContents(appConfig.obs.websocket.sourceNames.p1Team, String(matchState.teams[0]));
                window.obs.setTextSourceContents(appConfig.obs.websocket.sourceNames.p2Team, String(matchState.teams[1]));

                window.obs.setTextSourceContents(appConfig.obs.websocket.sourceNames.round, String(matchState.round));

                return;
            }
        })
        .catch(() => { return; })
    }
}
