import Sidebar from "./Components/Sidebar";
import MainView from "./Components/MainView";

import { useState } from "react";

export default function App() {
  const [view, setView] = useState('front');

  return (
    <div className="flex flex-row bg-gray-800 w-screen h-screen">
      <MainView view={view} />
      <Sidebar currentView={view} clickCallback={setView} />
    </div>
  )
}
