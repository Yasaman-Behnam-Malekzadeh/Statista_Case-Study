import React from "react";

type DetailCardProps = {
  detailItem: {
    title: string;
    date: string;
    description: string;
  };
};

export const DetailCard: React.FC<DetailCardProps> = ({ detailItem }) => {
  return (
    <div className="rounded-md detail-card border-2 border-gray-100 shadow-xl p-5">
      <h2 className="mb-5 font-bold">{detailItem.title}</h2>
      <div className="flex flex-col mb-4">{detailItem.date}</div>
      <p>{detailItem.description}</p>
    </div>
  );
};
