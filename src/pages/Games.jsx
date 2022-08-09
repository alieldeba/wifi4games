import { useSelector } from "react-redux";
import GameCard from "../components/GameCard";

export default function Games() {
  const games = useSelector((state) => state.games);

  return (
    <div className="container">
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {Array.isArray(games) &&
            games.map((game) => <GameCard data={game} key={game.id} />)}
        </div>
      </section>
    </div>
  );
}