import { useSelector } from "react-redux";
import GameCard from "../components/GameCard";

export default function Home() {
  const game = useSelector((state) => state.games);

  return (
    <div className="container">
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {game.map((e) => (
            <GameCard title={e.title} image={e.image} key={e.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
