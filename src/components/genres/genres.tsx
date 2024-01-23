import { useEffect, useState } from "react";
import { IGenres } from "../../data/models";
import { getGenres } from "../../servises/getGenres";
import { Option } from "./option";
import "./style.css";

type GenreProps = {
  onSelected: (selected: string) => void;
};

export const Genre: React.FC<GenreProps> = (props) => {
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [value, setValue] = useState("");

  const handlerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    props.onSelected(event.target.value);
  };

  useEffect(() => {
    getGenres().then((data) => {
      setGenres(data.results);
    });
  }, []);

  return (
    <>
      <div className="select_box">
        {" "}
        <h2>Genres:</h2>
        <select
          required
          name="genres"
          value={value}
          id="genres_sel"
          onChange={handlerChange}
        >
          <option value={"all"}>All</option>
          {genres.map((genre) => (
            <Option option={genre} key={genre.id} />
          ))}
        </select>
      </div>
    </>
  );
};
