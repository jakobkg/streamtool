interface DropdownSettingProps {
    name: string;
    options: string[];
    setValueCallback: React.Dispatch<React.SetStateAction<string>>;
}

export function DropdownSetting({ name, options, setValueCallback }: DropdownSettingProps): JSX.Element {
    return (
        <div className="grid grid-cols-2 grid-rows-1">
            {name}
            <select name={name} id={name.concat(" dropdown")} className="text-black"
                onChange={() => {
                    const thisElement = document.getElementById(name.concat(" dropdown")) as HTMLSelectElement;
                    setValueCallback(thisElement.value);
                }}>
                { options.map((option) => (<option>{option}</option>)) }
            </select>
        </div>
    );
}