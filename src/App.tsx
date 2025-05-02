import "xterm/css/xterm.css";

function App() {
  return (
    <div className="relative w-full h-dvh overflow-hidden">
      <div id="terminal" className="w-full h-full absolute top-0 left-0" />
    </div>
  );
}

export default App;
