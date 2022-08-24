import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
