import { useRef, useEffect } from "react";

export const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    function handleOutclick(event) {
      const target = event.target;
      if (!ref.current.contains(target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleOutclick);

    return () => {
      document.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return ref;
};

