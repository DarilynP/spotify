import { useEffect } from "react";

export default function Callback() {
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&")[0].split("=")[1];
      window.localStorage.setItem("token", token);
      window.location.href = "/"; // go back home
    }
  }, []);

  return <p>Loading...</p>;
}
