import { useEffect, useState } from "react";
import axios from "axios";
import "./RecentlyPlayed.css";

export default function RecentlyPlayed({ token }) {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    if (!token) return;

    axios
      .get("https://api.spotify.com/v1/me/player/recently-played?limit=10", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setRecent(res.data.items);
      })
      .catch((err) => console.error("Error fetching recently played:", err));
  }, [token]);

  return (
    <div className="recently-section">
      <h2 className="rp-title">Recently Played</h2>

      <div className="rp-scroll">
        {recent.map((item) => (
          <div key={item.played_at} className="rp-bubble">
            <img
              src={item.track.album.images[0]?.url}
              alt="album cover"
              className="rp-img"
            />
            <p className="rp-name">{item.track.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
