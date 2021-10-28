import { ScoreboardView } from "../Scoreboard/ScoreboardView";
import { SettingsView } from "../Settings/SettingsView";

import { MatchState } from "@interfaces/MatchState";
import { AppConfig } from "@interfaces/AppConfig";

interface AppViewProps {
    view: string;
    matchState: MatchState;
    appConfig: AppConfig;
}

export function AppView({ view, matchState, appConfig: appConfig }: AppViewProps): JSX.Element {
    switch (view) {
        case "scoreboard":
            return <ScoreboardView matchState={matchState} appConfig={appConfig} />;
            
        case "settings":
            return <SettingsView appConfig={appConfig} />;
        
        default:
            return <></>;
    }
}
