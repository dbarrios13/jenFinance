import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Dashboard}/>
    </BrowserRouter>
  );
}

export default App;
