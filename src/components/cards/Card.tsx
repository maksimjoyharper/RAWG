import { Link } from "react-router-dom";
import { IGames } from "../../data/models";
import "./styleCard.css";
import { useState, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

type CardProps = {
  card: IGames;
};

export function Card({ card }: CardProps) {
  const [isOpenPlatforms, setIsOpenPlatforms] = useState(false);

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpenPlatforms) setTimeout(() => setIsOpenPlatforms(false), 50);
  });
  return (
    <Link to={`${card.id}`} style={{ textDecoration: "none" }}>
      <div className="card">
        <img src={card.background_image} className="img_card" />
        <h3 className="name_game">{card.name}</h3>
        <p>Rating: {card.rating}</p>
        <button
          className="platforms__btn"
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            setIsOpenPlatforms(!isOpenPlatforms);
          }}
        >
          Platforms
        </button>
        <div
          className={`platforms ${isOpenPlatforms ? "active" : ""}`}
          ref={menuRef}
        >
          <ul className="platform__list">
            {card.platforms.map((platform) => (
              <ol className="platform__name" key={platform.platform.id}>
                {platform.platform.name}{" "}
              </ol>
            ))}
          </ul>
        </div>

        <p className="release_data">
          <span className="relesae_text">Release date: </span> {card.released}
        </p>
      </div>
    </Link>
  );
}
