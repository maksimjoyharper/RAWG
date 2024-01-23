import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition } from "@react-spring/web";
import { animated } from "react-spring";
import { SearchProvider } from "./components/search/SearchProvider";

import { RenderCards } from "./components/cards/renderCards";
import { GameIntro } from "./components/game/game.descript";
import { Layout } from "./components/layout/Layout";

export const App = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <>
      {" "}
      <SearchProvider>
        {/* <main className="container_game"> */}
        {transitions((style, item) => (
          <animated.div className="div_animated" style={style}>
            <Routes location={item}>
              <Route path="/" element={<Layout />}>
                <Route path="/RAWG" element={<RenderCards />} />
                <Route path="/RAWG/:id" element={<GameIntro />} />
              </Route>
            </Routes>
          </animated.div>
        ))}
        {/* </main> */}
      </SearchProvider>
    </>
  );
};
