import { ImCross, ImCheckmark } from 'react-icons/im';

interface ToggleProps {
    value: boolean;
    setValueCallback: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Toggle({value, setValueCallback}: ToggleProps): JSX.Element {
    return (
        <div className={'relative w-9 h-6 p-1 cursor-pointer rounded-full '.concat(value ? 'bg-green-500' : 'bg-red-500')}
             onClick={() => { setValueCallback(!value); }} >
            <div className={'absolute w-4 h-4 transition-all duration-100 rounded-full bg-white '.concat(value ? 'left-4' : 'left-1')}>
            </div>
            <ImCross className='text-white absolute right-1.5 top-2 w-2 h-2' />
            <ImCheckmark className='text-white absolute left-1.5 top-2 w-2 h-2' />
        </div>
    );
}