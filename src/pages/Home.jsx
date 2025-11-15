import { useEffect, useState } from "react";
import "./Home.css";

import Header from "../components/Header";
import RecentlyPlayed from "../components/RecentlyPlayed";
import WrappedSection from "../components/WrappedSection";
import EditorsPicks from "../components/EditorsPicks";
import MiniPlayer from "../components/MiniPlayer";
import PlaylistCard from "../components/PlaylistCard";

export default function Home() {
  const [token, setToken] = useState("");

  const playlists = [
    { id: 1, title: "Mood Booster", artist: "Spotify", cover: "/covers/mood.jpg" },
    { id: 2, title: "Chill Hits", artist: "Spotify", cover: "/covers/chill.jpg" },
  ];

  //  Check for Spotify token
  useEffect(() => {
    const tok = window.localStorage.getItem("token");
    setToken(tok);
  }, []);

  //  If no token, ask user to login
  if (!token) {
    return (
      <div className="need-login">
        <h2>You must log in to Spotify</h2>
        <a className="login-btn" href="/login">
          Login with Spotify
        </a>
      </div>
    );
  }

  // ⬇ If token exists, show the real Home page
  return (
    <div className="home-page">

      {/* Top Greeting + Icons */}
      <Header title="Recently played" />

      {/* Recently Played */}
      <RecentlyPlayed token={token} />

      {/* Spotify Wrapped Section */}
      <WrappedSection />

      {/* Editor’s Picks */}
      <EditorsPicks />

      {/* Playlist Grid */}
      <div className="playlist-section">
        <h2 className="section-title">Made For You</h2>
        <div className="playlist-grid">
          {playlists.map((p) => (
            <PlaylistCard key={p.id} {...p} />
          ))}
        </div>
      </div>

      {/* Mini Player */}
      <MiniPlayer token={token} />
    </div>
  );
}
