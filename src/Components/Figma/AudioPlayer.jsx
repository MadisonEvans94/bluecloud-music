import React from "react";
import playButton from "../../assets/Figma/icons/playButton.svg";

// TODO:
// [ ] update values of breakpoint lengths

function AudioPlayer() {
  return (
    <div className="h-[110px] w-full max-w-[360px] border border-info sm:max-w-[360px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[520px] 2xl:max-w-[600px]">
      <img src={playButton} alt="playButton" />
    </div>
  );
}

export default AudioPlayer;
