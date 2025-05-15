import "./App.css";
import Youtube from "react-youtube-liteframe";

function App() {
  return (
    <div>
      <Youtube
        videoID="g1gix7znjS4"
        videoTitle="TRUTH OR DRINK | Alan vs Chloe"
        noCookie={true}
      />
      <Youtube
        videoID="FjwLfkUb45E"
        short={true}
        videoTitle="Roman Slavery Was Not Like America's — Kyle Harper"
        noCookie={true}
      />
      <Youtube videoID="-8PYD6naGus" />
      <Youtube videoID="3enHvs7VaN8" />
      <Youtube videoID="J87kCZptPeY" />
      <Youtube videoID="5bRG8eFSDmA" />
      <Youtube videoID="M9BoBI5kQxI" />
      <Youtube videoID="5bRG8eFSDmA" />
      <Youtube videoID="rSQICh09784" />
      <Youtube videoID="8w0BvPx_xDo" />
    </div>
  );
}

export default App;
