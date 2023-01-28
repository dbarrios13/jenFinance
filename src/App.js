import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav, Dashboard } from "./Components";

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
