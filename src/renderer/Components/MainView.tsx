import Front from './Front';
import Settings from './Settings';

import SetState from '@interfaces/SetState';

interface MainViewProps {
    view: string;
    state: SetState;
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