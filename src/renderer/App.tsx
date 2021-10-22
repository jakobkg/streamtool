import Sidebar from "./Components/Sidebar";
import MainView from "./Components/MainView";
import { useState } from "react";

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-row bg-gray-800 w-screen h-screen">
      <MainView text={clicked ? 'a' : 'b'}/>
      <Sidebar clickState={clicked} clickCallback={setClicked} />
    </div>
  )
}
