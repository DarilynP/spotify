import "./Login.css";
// import Apple from "../assets/apple.png";
// import Facebook from "../assets/facebook.png";
// import Google from "../assets/google.png";

const CLIENT_ID = "c0adf13dc7bd4185b35c7f228753c69b";
const REDIRECT_URI = "http://localhost:5173/callback";

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export default function Login() {
  return (
    <div className="login-page">
      <h1 className="login-title">
        Millions of Songs. <br /> Free on Spotify.
      </h1>

      {/* REAL Spotify OAuth Login */}
      <a
        className="login-green-btn"
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-recently-played user-read-playback-state`}
      >
        Sign up free
      </a>

      {/* <button className="login-social-btn google">
        <img src={Google} alt="google" />
        Continue with Google
      </button>

      <button className="login-social-btn facebook">
        <img src={Facebook} alt="facebook" />
        Continue with Facebook
      </button>

      <button className="login-social-btn apple">
        <img src={Apple} alt="apple" />
        Continue with Apple
      </button> */}

      <a
        className="login-link"
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-recently-played user-read-playback-state`}
      >
        Log in
      </a>
    </div>
  );
}
