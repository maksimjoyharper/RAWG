import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseover", handleClick);
    return () => {
      document.addEventListener("mouseover", handleClick);
    };
  });
};
