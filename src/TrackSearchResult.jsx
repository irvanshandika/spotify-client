import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div className="flex m-2 items-center cursor-pointer" onClick={handlePlay}>
      <img src={track.albumUrl} alt="" style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-gray-400">{track.artist}</div>
      </div>
    </div>
  );
}
