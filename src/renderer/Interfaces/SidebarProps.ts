import React from 'react'

export default interface SidebarProps {
    currentView: string;
    clickCallback: React.Dispatch<React.SetStateAction<string>>;
}