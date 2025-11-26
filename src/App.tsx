import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
