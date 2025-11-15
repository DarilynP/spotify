import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
import BottomNav from "./components/BottomNav";
import Callback from "./components/Callback";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark text-white font-inter">

        {/* Main routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/playlist/:id" element={<Playlist />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Callback" element={<Callback />} />
        </Routes>

        {/* Bottom navigation stays visible on all pages */}
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
