import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import initialColors from "./InitialColors";

import Colors from "./Colors";
import ColorList from "./ColorList";
import ColorFinder from "./ColorFinder";

function App() {
  const colors =
    JSON.parse(window.localStorage.getItem("colors")) || initialColors;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ColorList />} />
          <Route path="/colors" element={<Colors />} />
          <Route
            path="/colors/:name"
            element={<ColorFinder colors={colors} />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
