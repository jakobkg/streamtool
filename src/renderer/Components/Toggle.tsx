import React from "react";

interface ToggleProps {
    state: boolean;
    setStateCallback: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle = ({state, setStateCallback}: ToggleProps) => {
    return (
        <div className={'relative w-16 h-8 p-1 cursor-pointer rounded-full '.concat(state ? 'bg-green-500' : 'bg-red-500')}
             onClick={() => { setStateCallback(!state) }} >
            <div className={'absolute w-6 h-6 transition-all duration-100 rounded-full bg-white '.concat(state ? 'left-9' : 'left-1')}>
            </div>
        </div>
    )
}

export default Toggle;