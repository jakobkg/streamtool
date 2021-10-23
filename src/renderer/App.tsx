import Sidebar from "./Components/ButtonModule";
import MainView from "./Components/MainView";

import { useState } from "react";
import ButtonModule from "./Components/ButtonModule";

interface playerState {
  teams: string[];
  setTeams: React.Dispatch<React.SetStateAction<string>>[];
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string>>[];
  scores: number[];
  setScores: React.Dispatch<React.SetStateAction<number>>[];
}

export default function App() {
  const [view, setView] = useState('front');
  
  const [p1Team, setP1Team] = useState('');
  const [p1Tag, setP1Tag] = useState('');
  const [p1Score, setP1Score] = useState(0);

  const [p2Team, setP2Team] = useState('');
  const [p2Tag, setP2Tag] = useState('');
  const [p2Score, setP2Score] = useState(0);

  const state: playerState = {
    teams: [p1Team, p2Team],
    setTeams: [setP1Team, setP2Team],
    tags: [p1Tag, p2Tag],
    setTags: [setP1Tag, setP2Tag],
    scores: [p1Score, p2Score],
    setScores: [setP1Score, setP2Score]
  }

  return (
    <div className="flex flex-row bg-gray-800 w-screen h-screen">
      <MainView view={view} state={state} />
      <ButtonModule currentView={view} clickCallback={setView} />
    </div>
  )
}
