import { BreakLength } from "./components/BreakLength";
import { SessionLength } from "./components/SessionLength";
import { Timer } from "./components/Timer";
import { TimerControl } from "./components/TimerControl";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="App bg-astronaut-blue w-full h-full text-white flex absolute flex-col justify-center items-center select-none text-center md:transform md:scale-125 min-w-xs">
      <Title />
      <div className="flex flex-col font-medium md:flex-row">
        <BreakLength />
        <SessionLength />
      </div>
      <Timer />
      <TimerControl />
    </div>
  );
}

export default App;
