import "./App.css";
import { Navbar } from "./components/nav";
import { Intro } from "./components/sections";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col">
        <Intro />
      </main>
      ;
    </>
  );
}

export default App;
