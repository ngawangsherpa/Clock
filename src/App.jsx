import "./App.css";
import Clock from "./clock";
function App() {
  let dateTime = new Date().toLocaleDateString();
  return (
    <>
      <Clock title="Current Time is" dateTime={dateTime} />
    </>
  );
}

export default App;
