import React, { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import TheArtist from "../../components/TheArtist";
import NewsSection from "../../components/NewsSection";

function HomeAbout() {
  const [height, setHeight] = useState("auto");
  const [resize, setResize] = useState(false);

  const theArtistEl = useRef(null);
  const newsSectionEl = useRef(null);

  const isMobile = useMediaQuery({
    query: "only screen and (max-width: 28.125em)",
  });

  useEffect(() => {
    theArtistEl.current &&
      setHeight(getComputedStyle(theArtistEl.current).width);
  }, [theArtistEl, resize]);

  window.addEventListener("resize", () => {
    setResize(!resize);
  });

  return (
    <div className="d-flex justify-content-center home-about">
      <TheArtist reference={theArtistEl} height={isMobile ? "auto" : height} />
      <NewsSection
        reference={newsSectionEl}
        height={isMobile ? "auto" : height}
      />
    </div>
  );
}

export default HomeAbout;
