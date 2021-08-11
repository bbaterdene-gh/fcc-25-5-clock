import { BreakLength } from "./components/BreakLength";
import { SessionLength } from "./components/SessionLength";
import { Timer } from "./components/Timer";
import { TimerControl } from "./components/TimerControl";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="App bg-astronaut-blue w-full h-full text-white flex absolute flex-col justify-center items-center select-none">
      <Title />
      <div className="flex flex-col font-medium">
        <BreakLength />
        <SessionLength />
      </div>
      <Timer />
      <TimerControl />
    </div>
  );
}

export default App;
