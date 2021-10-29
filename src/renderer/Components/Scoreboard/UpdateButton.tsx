import { updateObsFiles } from "@/renderer/Functions/updateObsFiles";
import { appConfig } from "@/renderer/App";
import { ImCheckmark } from "react-icons/im";

export function UpdateButton(): JSX.Element {
    return !appConfig.obs.liveUpdate ? (
        <div className="button bg-green-500 text-white flex justify-center"
        onClick={() => updateObsFiles()}>
            <ImCheckmark size="35" />
        </div>
    ) : <></>;
}