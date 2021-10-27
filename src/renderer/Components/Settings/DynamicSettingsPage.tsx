import { AppConfig } from '@interfaces/AppConfig';
import { UISettingsPage } from './UISettingsPage';
import { OBSSettingsPage } from './OBSSettingsPage';

interface DynamicSettingsPageProps {
    page: string;
    config: AppConfig;
}

export function DynamicSettingsPage({ page, config }: DynamicSettingsPageProps): JSX.Element {
    switch (page) {
        case 'ui':
            return <UISettingsPage config={config} />;
    
        case 'obs':
            return <OBSSettingsPage config={config} />;

        default:
            return <></>;
    }
}