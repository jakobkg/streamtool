import ScoreboardView from '../Scoreboard/ScoreboardView';
import SettingsView from '../Settings/SettingsView';

import MatchState from '@interfaces/MatchState';
import AppState from '@interfaces/AppState';

interface AppViewProps {
    view: string;
    matchState: MatchState;
    appState: AppState;
}

const AppView = ({ view, matchState, appState }: AppViewProps) => {
    switch (view) {
        case 'scoreboard':
            return <ScoreboardView matchState={matchState} />;
            
        case 'settings':
            return <SettingsView appState={appState} />;
        
        default:
            return <></>
    }
};

export default AppView;