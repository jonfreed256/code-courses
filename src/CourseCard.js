import React from "react";

export default function Course({
  title,
  image,
  courseAuthId,
  author
}) {

  return (
    <div className="course-card">
      <div className="card" id={courseAuthId}>
        <h1 className="card-title">{title}</h1>
        <h2 className="card-author">{author}</h2>
        <div>
          <img src={image} alt={image} />
        </div>
      </div>
    </div>
  );
}
