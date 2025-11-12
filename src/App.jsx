import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Search from "./pages/Search";
// import Library from "./pages/Library";
// import Playlist from "./pages/Playlist";
// import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark text-white font-inter">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/playlist/:id" element={<Playlist />} /> */}
        </Routes>
        {/* <BottomNav /> */}
      </div>
    </BrowserRouter>
  );
}
