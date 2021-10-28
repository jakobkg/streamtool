interface TextfieldProps {
    data: string;
    setterCallback: (value: string) => void;
    className?: string;
    description?: string;
}

export function Textfield({ data, setterCallback, className, description }: TextfieldProps): JSX.Element {
    return (
        <div className={"flex flex-col ".concat(className ? className : "")}>
            <p className="text-xs">{description}</p>
            <input type="text" className="text-black textbox" spellCheck="false"
            value={data}
            onChange={e => setterCallback(e.target.value)}></input>
        </div>
    );
}