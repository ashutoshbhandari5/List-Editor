import React from "react";
import ranking from "../Json/Rankings.json";
import { d3 } from "../utils/d3";

const rankings = () => {
  const d3Feature = new d3();
  const maxPoints = d3Feature.max(ranking, (data) => {
    return data.points;
  });
  const minPoints = d3Feature.min(ranking, (data) => {
    return data.points;
  });
  const extentPoints = d3Feature.extent(ranking, (data) => {
    return data.points;
  });
  const averagePoints = d3Feature.mean(ranking, (data) => {
    return data.points;
  });
  const median = d3Feature.median(ranking, (data) => {
    return data.points;
  });
  const deviation = d3Feature.deviation(ranking, (data) => {
    return data.points;
  });
  // console.log(minPoints);
  // console.log(maxPoints);
  // console.log(extentPoints);
  //console.log(averagePoints);
  //console.log(median);
  console.log(deviation);

  return <div>rankings</div>;
};

export default rankings;
