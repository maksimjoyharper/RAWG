import "./style_load.css";
import { Spin } from "antd";
import "antd/dist/reset.css";

export const Loading = () => {
  const divCount = 20;
  return (
    <>
      <div className="container">
        {Array.from({ length: divCount }).map((_, index) => (
          <div className="card_loading" key={index}>
            <div>
              Loading <Spin size="large" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
