import React from "react";
import ranking from "../Json/Rankings.json";
import { d3 } from "../utils/d3";

const rankings = () => {
  const d3Feature = new d3();
  const maxPoints = d3Feature.max(ranking, "points");
  const minwins = d3Feature.min(ranking, "wins");
  const extentMatches = d3Feature.extent(ranking, "matchs");
  const averagePoints = d3Feature.mean(ranking, "points");
  const median = d3Feature.median(ranking, "points");
  const deviation = d3Feature.deviation(ranking, "draws");
  const ascending = d3Feature.ascending(ranking, "points");
  const descending = d3Feature.descending(ranking, "points");

  const value = d3Feature
    .nest(ranking)
    .key("team")
    .rollUp(d3Feature.max(ranking, "points"));

  console.log(value.nestedData);

  return <div>rankings</div>;
};

export default rankings;
