import React from "react";
import videosMock from "../videosMock.json";

import Accordion from "../Accordion/Accordion.jsx";

const Videos = () => (
  <section className="videos">
    <h1>Video Lists</h1>
    <Accordion movies={videosMock} />
  </section>
);

export default Videos;
