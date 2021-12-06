import { AppConfig } from "@interfaces/AppConfig";
import { Textfield } from "../Common/Textfield";
import { BooleanSetting } from "./BooleanSetting";
import { PathSetting } from "./PathSetting";

interface OBSSettingsPageProps {
    config: AppConfig;
}

export function OBSSettingsPage({ config }: OBSSettingsPageProps): JSX.Element {
    return (
        <div className="settings-page">
            <h1>OBS</h1>
            <hr />
            <h2>Websocket:</h2>
            
            <div className="grid grid-cols-3 grid-rows-1 gap-4 pb-3">
                <Textfield data={config.obs.websocket.address} setterCallback={config.obs.websocket.setAddress} description="Address" />
                <Textfield data={config.obs.websocket.port} setterCallback={config.obs.websocket.setPort} description="Port" />
                <Textfield data={config.obs.websocket.password} setterCallback={config.obs.websocket.setPassword} description="Password" />
            </div>

            <div className="grid grid-cols-3 gap-4 pb-3">
                <div className="button bg-gray-300 dark:bg-gray-500" onClick={() => { 
                    window.obs.connect(config.obs.websocket.address.concat(":", config.obs.websocket.port))
                    .then(() => {
                        return window.obs.getScenes();
                    })
                    .then((scenes: string[]) => {
                        config.obs.websocket.setScenes(scenes);
                    })
                    .catch(() => { return; });
                    }
                }>
                    Connect to OBS
                </div>
            </div>

            <hr />
            <h2>Legacy:</h2>

            <div className="grid grid-cols-2 grid-rows-1 gap-4">
                <BooleanSetting name="Scoreboard Assistant mode" value={config.obs.legacyMode} setValueCallback={config.obs.setLegacyMode} />
                <PathSetting name="Output dir" value={config.obs.outputDir} setValueCallback={config.obs.setOutputDir} />
            </div>
        </div>
    );
}