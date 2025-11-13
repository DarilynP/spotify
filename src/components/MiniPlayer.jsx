export default function MiniPlayer() {
    return (
      <div className="mini-player">
        <img
          src="/img/example-track.jpg"
          alt="track"
          className="mini-player-img"
        />
  
        <div className="mini-info">
          <p className="mini-title">From Me to You</p>
          <p className="mini-artist">Mono / Remastered</p>
        </div>
  
        <i className="ri-pause-fill mini-icon"></i>
      </div>
    );
  }
  