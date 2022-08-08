export default function GameCard(props) {
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm w-[340px]">
      <img
        src={props.data.image}
        loading="lazy"
        alt={props.data.title}
        className="w-full h-48 rounded-t-md object"
      />
      <div className="flex items-center mt-2 pt-3 ml-4 mr-2"></div>
      <div className="pt-3 ml-4 mr-2 mb-3">
        <h3 className="text-xl text-gray-900">{props.data.title}</h3>
      </div>
    </article>
  );
}
