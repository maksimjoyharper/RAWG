import { IGenres } from "../../data/models";

interface GenreProps {
  option: IGenres;
}

export function Option({ option }: GenreProps) {
  return <option value={option.slug}>{option.name}</option>;
}
