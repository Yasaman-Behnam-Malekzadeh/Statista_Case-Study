import { useQuery } from "@tanstack/react-query";

type Item = {
  identifier: number;
  title: string;
  description: string;
  link: string;
  subject: string;
  date: string;
  image: string;
  image_url: string;
};

type ResultData = {
  items: Item[];
};

const fetchDataResults = async (
  page: number,
  limit: number,
  search: string
): Promise<ResultData> => {
  const response = await fetch(
    `https://cdn.statcdn.com/static/application/search_results.json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data: ResultData = await response.json();

  const filteredItems = data.items.filter((item) =>
    item.title.toLowerCase().includes((String(search) || "").toLowerCase()) || item.description.toLowerCase().includes((String(search) || "").toLowerCase())
  );
  console.log(filteredItems);
  const startIndex = (page - 1) * limit;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + limit);

  return { items: paginatedItems };
};

export const useDataResults = (page: number, limit: number, search: string) => {
  return useQuery({
    queryKey: ["searchResults", page, limit, search],
    queryFn: () => fetchDataResults(page, limit, search),
  });
};
