import { useEffect, useMemo, useState } from "react";
import { useSearchContext } from "../search/SearchProvider";
import "./styleCard.css";

import { Card } from "./Card";
import { IGames } from "../../data/models";
import { getGames } from "../../servises/getGames";

import { Loading } from "../loading/loading";
import { Genre } from "../genres/genres";

export function RenderCards() {
  const [cards, setCards] = useState<IGames[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [genre, setGenre] = useState("all");

  const { debounsedSearch } = useSearchContext();

  const [page, setPage] = useState(2);

  useEffect(() => {
    setLoading(true);

    getGames(debounsedSearch, genre, 1)
      .then((data) => {
        setCards(data.results);
      })
      .finally(() => setLoading(false));
  }, [debounsedSearch, genre]);

  const infinitObserver = useMemo(() => {
    return new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        getGames(debounsedSearch, genre, page).then((data) => {
          setPage(page + 1);
          setCards((ev) => [...ev, ...data.results]);
        });
      }
    });
  }, [page, debounsedSearch, genre]);

  const getGenre = (genres: string) => {
    setGenre(genres);
  };

  useEffect(() => {
    const lastItem = document.querySelector(".check__observer");
    if (lastItem) {
      infinitObserver.observe(lastItem);
    }
  }, [infinitObserver, cards]);

  return (
    <>
      <Genre onSelected={getGenre} />

      {loading && <Loading />}

      <div id="container">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
        <div className="check__observer"></div>
      </div>
    </>
  );
}
