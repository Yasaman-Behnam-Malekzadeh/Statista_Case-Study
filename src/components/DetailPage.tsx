import React from "react";
import { DetailCard } from "./DetailCard";
import { useDataDetails } from "./useDataDetails";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFavorites } from "./FavouriteContext";

const unlikeSrc =
  "https://www.pngall.com/wp-content/uploads/14/Heart-Outline-PNG-Clipart.png";
const likeSrc =
  "https://static-00.iconduck.com/assets.00/heart-icon-512x461-9jnybwpm.png";

export const DetailPage: React.FC = () => {
  const {favoriteIds, toggleFavorite} = useFavorites(); 

  const { id } = useParams();
  const itemId = Number(id);

  const { data, isLoading, error } = useDataDetails(itemId);

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;

  const isFavorite = favoriteIds.includes(itemId);

  const teaserImage =
    data.teaser_image_urls.find((item: { width: number }) => item.width === 754)
      ?.src ||
    "https://media.istockphoto.com/id/1180410208/vector/landscape-image-gallery-with-the-photos-stack-up.jpg?s=612x612&w=0&k=20&c=G21-jgMQruADLPDBk7Sf1vVvCEtPiJD3Rf39AeB95yI=";

  return (
    <div>
      <div className="detail-page h-24 bg-darkBlue border-b-4 border-blue-500 flex justify-center">
        <Link to={"/"} className="absolute top-0 left-0 p-5 ">
          <img
            className="bg-white h-12"
            alt="logo"
            src="https://cdn.statcdn.com/static/img/Statista-Logo-Color-Primary.png"
          />
        </Link>
      </div>
      <div className="px-20 pt-10 flex flex-col justify-start">
        <div className="flex justify-between">
          <h1 aria-live="polite" className="mb-10 text-2xl font-bold">{data.subject}</h1>
          <img
            role="button"
            aria-label="Toggle favorite"
            className="w-10 h-10 hover:cursor-pointer"
            onClick={() => toggleFavorite(itemId)}
            src={isFavorite ? likeSrc : unlikeSrc}
            alt="favourite_icon"
          />
        </div>
        <div className="flex alig w-auto justify-center align-middle bg-white">
          <div className="w-[50%] mr-10">
            <DetailCard detailItem={data} />
          </div>
          <div className="w-[50%] shadow-xl border-2 border-gray-50">
            <img src={teaserImage} alt="teaser" />
          </div>
        </div>
        <Link
          aria-label="Go back to homepage"
          to={"/"}
          className="absolute  bottom-20 left-20 p-3 bg-blue-600 text-white rounded-lg"
        >
          <img
            src="https://img.icons8.com/ios7/600w/FFFFFF/circled-left-2.png"
            alt="back"
            className="w-5 h-5 inline-block mr-2"
          />
          Back
        </Link>
      </div>
    </div>
  );
};
