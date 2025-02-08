import React from "react";

type DetailCardProps = {
  detailItem: {
    title: string;
    date: string;
    description: string;
  };
};

export const DetailCard: React.FC<DetailCardProps> = ({ detailItem }) => {
  const [published = "", mainTitle = detailItem.title] =
    detailItem.title?.split(":") ?? [];

  return (
    <div className="detail-card border-2 border-gray-50 shadow-xl p-5">
      <h2 className="mb-5 font-bold">{mainTitle}</h2>
      <div className="flex flex-col mb-4">
        {published && (
          <span>
            Published by <a href={published ? `/authors/${published}` : "#"} className="text-blue-500 underline">{published}</a>
          </span>
        )}
        <span>{detailItem.date}</span>
      </div>
      <p>{detailItem.description}</p>
    </div>
  );
};
