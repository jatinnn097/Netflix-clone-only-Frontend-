import React from "react";
import "./App.css";

function ThumbnailCard({ src }) {
  return (
    <div className="card">
      <img src={src} alt="thumbnail" />
    </div>
  );
}

export default ThumbnailCard;