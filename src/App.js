import Mainweb from "./Components/mainweb";
import "./app.css";

function App() {
  return (
    <div
      className="App"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(230, 230, 230), white)",
        overflow: "hidden",
      }}
    >
      <Mainweb />
    </div>
  );
}

export default App;
