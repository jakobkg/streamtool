import AppConfig from "@interfaces/AppConfig";
import PathSetting from "./PathSetting";

interface OBSSettingsPageProps {
    config: AppConfig;
}

const OBSSettingsPage = ({ config }: OBSSettingsPageProps) => {
    return (
        <div className='settings-page'>
            <h1>OBS</h1>
            <hr />
            <div className='w-full grid grid-cols-2 grid-rows-4 gap-4 pt-3'>
                <PathSetting name='Output dir' value={config.obs.outputDir} setValueCallback={config.obs.setOutputDir} />
            </div>
        </div>
    )
}

export default OBSSettingsPage;