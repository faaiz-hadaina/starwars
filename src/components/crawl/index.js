import * as React from "react";
import { useSelector } from "react-redux";
import Marquee from "react-fast-marquee";

export default function Crawl() {
  const movie = useSelector(
    (state) => state?.movieReducer?.selectedMovie || []
  );
  return (
    <Marquee style={{ color: "#fff", margin: "16px 0px" }}>
      {movie.opening_crawl}
    </Marquee>
  );
}
