import Featured from "components/Featured";
import List from "components/List";

export default function Home() {
  return (
    <div className="home">
      <Featured type="movie" />
      <div className="list-container">
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
}
