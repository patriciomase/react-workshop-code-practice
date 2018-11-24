import React from "react";

import Accordion from "../Accordion/Accordion.jsx";
import DataFetcher from "../DataFetcher/DataFetcher.jsx";

import { getVideos } from "../services/videoService.js";

const Videos = () => (
  <DataFetcher service={getVideos}>
    {data => (
      <section className="videos">
        <h1>Video Lists</h1>
        <Accordion movies={data} />
      </section>
    )}
  </DataFetcher>
);

export default Videos;
