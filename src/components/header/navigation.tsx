import { Link } from "react-router-dom";
import "./styleNav.css";
import { Search } from "../search/Search";

export const Header = () => {
  return (
    <>
      <header className="home_page">
        {" "}
        <Link className="box_home" to={"/"}>
          RAWG
        </Link>
        <Search />
      </header>
    </>
  );
};
