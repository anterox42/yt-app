import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div class="ui segment">
        <p></p>
        <div class="ui active inverted dimmer">
          <div class="ui loader"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe
          title="Video Player"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>

      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
