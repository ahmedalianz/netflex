export default function Section1() {
  return (
    <div className="section-container">
      <div className="section-left">
        <div className="title">Enjoy on your TV.</div>
        <div className="desc">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </div>
      </div>
      <div className="section-right">
        <img src="images/tv.png" alt="" />
        <video autoPlay playsInline muted loop src="videos/video.m4v"></video>
      </div>
    </div>
  );
}
