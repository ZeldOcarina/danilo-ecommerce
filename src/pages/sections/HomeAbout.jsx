import React, { useRef, useEffect, useState } from "react";

import TheArtist from "../../components/TheArtist";
import NewsSection from "../../components/NewsSection";

function HomeAbout() {
  const [height, setHeight] = useState("auto");
  const [resize, setResize] = useState(false);

  const theArtistEl = useRef(null);
  const newsSectionEl = useRef(null);

  useEffect(() => {
    theArtistEl.current &&
      setHeight(getComputedStyle(theArtistEl.current).width);
  }, [theArtistEl, resize]);

  window.addEventListener("resize", () => {
    setResize(!resize);
  });

  return (
    <div className="d-flex justify-content-center">
      <TheArtist reference={theArtistEl} height={height} />
      <NewsSection reference={newsSectionEl} height={height} />
    </div>
  );
}

export default HomeAbout;