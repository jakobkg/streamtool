import BooleanSetting from "./BooleanSetting";
import AppState from '@interfaces/AppState';

interface UISettingsPageProps {
    config: AppState;
}

const UISettingsPage = ({ config }: UISettingsPageProps) => {
    return (
        <div className='settings-page'>
            <h1>Interface</h1>
            <hr />
            <div className='w-full grid grid-cols-3 grid-rows-2 gap-4 pt-3'>
                <BooleanSetting name='Dark mode' value={config.darkmode} setValueCallback={config.setDarkmode} />
            </div>
        </div>
    )
}

export default UISettingsPage;