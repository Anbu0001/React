import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  return (

    <>
      <h1>Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;