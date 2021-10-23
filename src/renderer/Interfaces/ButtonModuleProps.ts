import React from 'react'

export default interface ButtonModuleProps {
    currentView: string;
    clickCallback: React.Dispatch<React.SetStateAction<string>>;
}