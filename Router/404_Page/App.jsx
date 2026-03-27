import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Valid Route */}
        <Route path="/" element={<Home />} />

        {/* 404 Route (MUST BE LAST) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;