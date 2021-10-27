interface TextfieldProps {
    data: string;
    setterCallback: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
    description?: string;
}

export function Textfield({ data, setterCallback, className, description }: TextfieldProps): JSX.Element {
    return (
        <div className={'flex flex-col '.concat(className ? className : '')}>
            <p className='text-xs'>{description}</p>
            <input type='text' className='text-black' spellCheck='false'
            value={data}
            onChange={e => setterCallback(e.target.value)}></input>
        </div>
    );
}