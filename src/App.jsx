import PortalModal from "./modal/PortalModal";
import TraditionalModal from "./modal/TraditionalModal";

function App() {
  return (
    <>
      <div>
        <h1 className="text-red-500">Nahian</h1>
        <TraditionalModal />
        <PortalModal/>
      </div>
    </>
  );
}

export default App;
