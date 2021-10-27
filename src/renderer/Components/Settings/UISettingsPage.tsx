import { BooleanSetting } from "./BooleanSetting";
import { AppConfig } from "@interfaces/AppConfig";

interface UISettingsPageProps {
    config: AppConfig;
}

export function UISettingsPage({ config }: UISettingsPageProps): JSX.Element {
    return (
        <div className="settings-page">
            <h1>Interface</h1>
            <hr />
            <div className="w-full grid grid-cols-3 grid-rows-2 gap-4 pt-3">
                <BooleanSetting name="Dark mode" value={config.ui.darkmode} setValueCallback={config.ui.setDarkmode} />
            </div>
        </div>
    );
}