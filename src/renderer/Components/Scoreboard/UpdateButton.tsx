import { updateObsData } from "@/renderer/Functions/updateObsData";
import { ImCheckmark } from "react-icons/im";

export function UpdateButton(): JSX.Element {
    return (
        <div className="button bg-green-500 text-white flex justify-center"
        onClick={() => updateObsData()}>
            <ImCheckmark size="35" />
        </div>
    );
}