import { useQuery } from "@tanstack/react-query";

const fetchDataDetails = async (id: number) => {
  const response = await fetch(`https://cdn.statcdn.com/static/application/search_results.json`);

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await response.json();

  return data.items.find((item: { identifier: number }) => item.identifier === id);
};

export const useDataDetails = (id: number) => {
  return useQuery({
    queryKey: ["item", id],
    queryFn: () => fetchDataDetails(id),
    enabled: !!id,
  });
};
