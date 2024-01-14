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
        <main
          className="container_game"
          style={{
            overflow: "hidden",
            minHeight: "900px",
          }}
        >
          {transitions((style, item) => (
            <animated.div style={style}>
              <div style={{}}>
                {" "}
                <Routes location={item}>
                  <Route path="/" element={<Layout />}>
                    <Route path="/:id" element={<GameIntro />} />
                    <Route path="/" element={<RenderCards />} />
                  </Route>
                </Routes>
              </div>
            </animated.div>
          ))}
        </main>
      </SearchProvider>
    </>
  );
};
