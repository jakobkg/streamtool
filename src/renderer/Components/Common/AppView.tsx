import { ScoreboardView } from '../Scoreboard/ScoreboardView';
import { SettingsView } from '../Settings/SettingsView';

import { MatchState } from '@interfaces/MatchState';
import { AppConfig } from '@interfaces/AppConfig';

interface AppViewProps {
    view: string;
    matchState: MatchState;
    appConfig: AppConfig;
}

export function AppView({ view, matchState, appConfig: appState }: AppViewProps): JSX.Element {
    switch (view) {
        case 'scoreboard':
            return <ScoreboardView matchState={matchState} />;
            
        case 'settings':
            return <SettingsView appConfig={appState} />;
        
        default:
            return <></>
    }
}
