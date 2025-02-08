import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "./FavouriteContext";

type CardItemProps = {
  cardItem: {
    id: number;
    date: string;
    title: string;
    description: string;
  };
};

const unlikeSrc =
  "https://www.pngall.com/wp-content/uploads/14/Heart-Outline-PNG-Clipart.png";
const likeSrc =
  "https://static-00.iconduck.com/assets.00/heart-icon-512x461-9jnybwpm.png";

export const ListCard: React.FC<CardItemProps> = ({ cardItem }) => {
  const titleParts = cardItem.title.split(":");
  const published = titleParts.length > 1 ? titleParts[0] : "";
  const MainTitle =
    titleParts.length > 1 ? titleParts.slice(1).join(":") : cardItem.title;

  const { favoriteIds } = useFavorites();
  const isFavorite = favoriteIds.includes(cardItem.id);

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      to={`/detail/${cardItem.id}`}
      aria-label={`Read more about ${cardItem.title}`}
      className="list-card flex flex-col w-[700px] justify-center bg-white p-3 mb-5 rounded-sm shadow-blue-500/50 shadow-lg hover:bg-blue-50"
    >
      <div className="flex  justify-between text-gray-500 text-sm">
        <div>
          <span className=" mr-1 ">{published}</span>
          {published ? <span className="mr-1">|</span> : null}
          <span>{cardItem.date}</span>
        </div>
        <img
          className="w-5 h-5 hover:cursor-pointer"
          src={isFavorite ? likeSrc : unlikeSrc}
          alt="favourite_icon"
        />
      </div>
      <div className="text-blue-700 font-bold mb-3">{MainTitle}</div>
      <p className="h-8 whitespace-nowrap overflow-hidden text-ellipsis text-sky-800 text-sm">
        {cardItem.description}
      </p>
    </Link>
  );
};
