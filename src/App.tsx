import LeftPanel from "./components/Pages/LeftPanel";
import RightPanel from "./components/Pages/RightPanel";
import Header from "./components/ui/Header";

function App() {
  return (
    <>
      <Header />
      <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-[55%_45%] bg-muted">
        <LeftPanel />
        <RightPanel />
      </div>
    </>
  );
}

export default App;
