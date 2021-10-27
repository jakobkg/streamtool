import { FaCog } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { IconButton } from './IconButton';

interface ButtonModuleProps {
    currentView: string;
    clickCallback: React.Dispatch<React.SetStateAction<string>>;
}

export function ButtonModule({currentView, clickCallback}: ButtonModuleProps): JSX.Element {
    return (
        <div className="button-module-container">
            {
                currentView == 'scoreboard' ?
                <IconButton icon={<FaCog size="28" />} target='settings' currentView={currentView} clickCallback={clickCallback} /> :
                <IconButton icon={<BsArrowLeft size="28" />} target='scoreboard' currentView={currentView} clickCallback={clickCallback} />
            }
        </div>
    )
}
