export default function Section3() {
  return (
    <div className="section-container">
      <div className="section-left">
        <div className="title">Watch everywhere.</div>
        <div className="desc">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </div>
      </div>
      <div className="section-right">
        <img src="images/tv2.png" alt="" />
        <video
          className="small"
          autoPlay
          playsInline
          muted
          loop
          src="videos/video2.m4v"
        ></video>
      </div>
    </div>
  );
}
