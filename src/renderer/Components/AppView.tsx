import Front from './Front';
import Settings from './Settings';

import SetState from '@interfaces/SetState';

interface AppViewProps {
    view: string;
    state: SetState;
}

const AppView = ({ view, state }: AppViewProps) => {
    switch (view) {
        case 'front':
            return <Front state={state} />;
            
        case 'settings':
            return <Settings />;
        
        default:
            return <></>
    }
};

export default AppView;