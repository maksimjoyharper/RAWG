export function getGenres() {
  return fetch(
    "https://api.rawg.io/api/genres?key=0e5b7a1a0c8f438291a4671e3ff315da"
  ).then((resp) => resp.json());
}
