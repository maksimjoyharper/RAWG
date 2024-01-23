import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../data/key-api";

import "./style-game.css";

type GameParams = {
  name: string;
  released: string;
  background_image_additional: string;
  description_raw: string;
};

export const GameIntro = () => {
  const params = useParams();
  const [param, setParams] = useState<GameParams>();
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${params.id}?key=${API_KEY}`)
      .then((resp) => resp.json())
      .then((data) => {
        setParams(data);
      });
  }, [params.id]);

  return (
    <div>
      {" "}
      {param && (
        <>
          <div className="game_intro_box">
            <div className="center_info">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                <h1 className="name">{param.name}</h1>
                <span className="released">
                  Date of release: &nbsp; &nbsp; {param.released}
                </span>
              </div>

              <img
                className="image_game"
                src={`${param.background_image_additional}`}
                alt=""
              />
            </div>
            <p className="about_game_title">About game:</p>
            <p className="game_description">{param.description_raw}</p>
          </div>
        </>
      )}
    </div>
  );
};
