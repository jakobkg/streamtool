import { Scoreboard } from "./Scoreboard";
import { Textfield } from "../Common/Textfield";
import { MatchState } from "@interfaces/MatchState";
import { AppConfig } from "@interfaces/AppConfig";
import { updateObsFiles } from "@/renderer/Functions/updateObsFiles";

interface ScoreboardViewProps {
    matchState: MatchState;
    appConfig: AppConfig;
}

export function ScoreboardView({ matchState, appConfig }: ScoreboardViewProps): JSX.Element {
    const liveUpdate = appConfig.obs.liveUpdate;
    return (
        <div className="appview-container" onKeyPress={(event) => {
            if (event.key == "Enter" && !liveUpdate) {
                updateObsFiles();
            }
        }}>
            <Textfield description="Round" className="w-48 absolute top-1/5 left-1/2 transform -translate-x-1/2 text-center"
                       data={matchState.round} setterCallback={matchState.setRound} />

            <Textfield description="P1 team" className="w-28 absolute bottom-1/2"
                       data={matchState.teams[0]} setterCallback={matchState.setTeams[0]} />

            <Textfield description="P1 tag" className="w-64 absolute bottom-1/2 left-36"
                       data={matchState.tags[0]} setterCallback={matchState.setTags[0]} />

            <Textfield description="P2 team" className="w-28 absolute bottom-1/2 right-72"
                       data={matchState.teams[1]} setterCallback={matchState.setTeams[1]} />

            <Textfield description="P2 tag" className="w-64 absolute bottom-1/2 right-6"
                       data={matchState.tags[1]} setterCallback={matchState.setTags[1]} />

            <Scoreboard matchState={matchState} />
            
            <div className="absolute bottom-6 flex flex-row gap-3">
                {(appConfig.obs.websocket.scenes.length != 0 ? "Scenes: " : "")}
                {appConfig.obs.websocket.scenes.map((value) => (
                    <div className="button dark:bg-gray-500 bg-gray-300" onClick={() => { window.obs.setScene(value); }} >{value}</div>
                ))}
            </div>
        </div>
    );
}