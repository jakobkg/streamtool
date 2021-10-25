import AppState from "@interfaces/AppState";
import UISettingsPage from './UISettingsPage';
import OBSSettingsPage from './OBSSettingsPage';

interface DynamicSettingsPageProps {
    page: string;
    config: AppState;
}

const DynamicSettingsPage = ({ page, config }: DynamicSettingsPageProps) => {
    switch (page) {
        case 'ui':
            return <UISettingsPage config={config} />
    
        case 'obs':
            return <OBSSettingsPage config={config} />

        default:
            return <></>
    }
}

export default DynamicSettingsPage;