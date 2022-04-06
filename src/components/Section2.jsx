export default function Section2({ image, title, desc }) {
  return (
    <div className="section-container">
      <div className="section-right">
        <img src={image} alt=""></img>
      </div>
      <div className="section-left">
        <h1 className="title">{title}</h1>
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
}
