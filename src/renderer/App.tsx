import Sidebar from "./Components/Sidebar";
import MainView from "./Components/MainView";

export default function App() {

  return (
    <div className="flex flex-row bg-gray-800 w-screen h-screen">
      <MainView text={'aeiou'}/>
      <Sidebar />
    </div>
  )
}
