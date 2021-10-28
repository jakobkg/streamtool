import { appConfig } from "../App";

export function stateCallbackBuilder<T>(setState: React.Dispatch<React.SetStateAction<T>>, key: string): (value: T, force?: boolean) => void {
    return (value, force?: boolean) => {
        setState(value);
        if (appConfig.obs.liveUpdate || force) {
            void window.electron.saveFile(key, String(value));
        }
    };
}
