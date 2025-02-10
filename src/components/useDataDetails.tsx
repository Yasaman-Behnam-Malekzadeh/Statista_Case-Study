import { useQuery } from "@tanstack/react-query";

const fetchDataDetails = async (id: number) => {
  const response = await fetch(`https://cdn.statcdn.com/static/application/search_results.json`); // Fetch the search results

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  } // Throw an error if the response is not ok

  const data = await response.json(); // Parse the JSON

  return data.items.find((item: { identifier: number }) => item.identifier === id); // Find the item with the given id
};

export const useDataDetails = (id: number) => {
  return useQuery({ // Use the useQuery hook
    queryKey: ["item", id], // Set the query key
    queryFn: () => fetchDataDetails(id), // Set the query function
    enabled: !!id, // Enable the query if the id is truthy
  });
};
