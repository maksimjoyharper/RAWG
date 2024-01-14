import { API_KEY } from "../data/key-api";

export function getGames(
  search: string,
  genre: string,
  page: number = 1
  // pageSize: number
) {
  const searchParams = new URLSearchParams();
  searchParams.append("key", API_KEY);
  searchParams.append("search", search);
  // searchParams.append("page_size", pageSize + "");
  searchParams.append("page", page + "");

  if (genre !== "all") {
    searchParams.append("genres", genre);
  }

  return fetch("https://api.rawg.io/api/games?" + searchParams.toString()).then(
    (resp) => resp.json()
  );
}
