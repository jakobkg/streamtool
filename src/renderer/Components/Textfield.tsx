import React from "react";

interface TextfieldProps {
    data: string;
    setterCallback: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
    description?: string;
}

const Textfield = ({data, setterCallback, className, description}: TextfieldProps) => {
    return (
        <div className={'flex flex-col '.concat(className ? className : '')}>
            <p className='text-xs'>{description}</p>
            <input type='text' className='text-black'
            value={data}
            onChange={e => setterCallback(e.target.value)}></input>
        </div>
    )
}

export default Textfield;