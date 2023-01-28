import { Route, Routes } from "react-router-dom";
import { Nav, Dashboard, Bills } from "./Components";

function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bills" element={<Bills />} />
      </Routes>
    </div>
  );
}

export default App;