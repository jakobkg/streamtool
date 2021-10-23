import Front from './Front';
import Settings from './Settings';

import PlayerState from '@interfaces/PlayerState';

interface MainViewProps {
    view: string;
    state: PlayerState;
}

const MainView = ({ view, state }: MainViewProps) => {
    switch (view) {
        case 'front':
            return <Front state={state} />;
            
        case 'settings':
            return <Settings />;
        
        default:
            return <></>
    }
};

export default MainView;