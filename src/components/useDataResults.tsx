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
}; // Define the Item type

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
  ); // Fetch the search results

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  } // Throw an error if the response is not ok

  const data: ResultData = await response.json(); // Parse the JSON

  const filteredItems = data.items.filter((item) =>
    item.title.toLowerCase().includes((String(search) || "").toLowerCase()) || item.description.toLowerCase().includes((String(search) || "").toLowerCase())
  ); // Filter the items based on the search keyword
 
  const startIndex = (page - 1) * limit; // Calculate the start index
  const paginatedItems = filteredItems.slice(startIndex, startIndex + limit); // Get the paginated items

  return { items: paginatedItems }; 
};

export const useDataResults = (page: number, limit: number, search: string) => {
  return useQuery({ // Use the useQuery hook
    queryKey: ["searchResults", page, limit, search], // Set the query key
    queryFn: () => fetchDataResults(page, limit, search), // Set the query function
  });
};
