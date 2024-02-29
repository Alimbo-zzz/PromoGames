import { useEffect, useRef, useState } from "react";

export default function useCursorCoordinates() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const scrollXRef = useRef(scrollX);
  const scrollYRef = useRef(scrollY);

  const offsetXRef = useRef(0);
  const offsetYRef = useRef(0);

  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX + scrollXRef.current,
      y: event.clientY + scrollYRef.current,
    });
  };

  const handleScroll = () => {
    setScrollY((prevScrollY) => {
      const newScrollY = window.scrollY;
      offsetYRef.current = window.scrollY - prevScrollY;
      scrollYRef.current = newScrollY;
      return Math.round(newScrollY);
    });
    setScrollX((prevScrollX) => {
      const newScrollX = window.scrollX;
      offsetXRef.current = window.scrollX - prevScrollX;
      scrollXRef.current = newScrollX;
      return Math.round(newScrollX);
    });
  };

  const calculateCoords = () => {
    setCoords({
      x: coords.x + offsetXRef.current,
      y: coords.y + offsetYRef.current,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    calculateCoords();
  }, [scrollY, scrollX]);

  return coords;
}
