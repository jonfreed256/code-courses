import React from "react";
import Tag from "./Tag";

export const TagContainer = ({ courses, handleTagFilter }) => {
  const courseTags = courses.map(courseObj => courseObj.tags).flat();
  const tagsObj = {};
  courseTags.forEach(element => {
    if (!tagsObj[element]) {
      tagsObj[element] = 1;
    } else {
      ++tagsObj[element];
    }
  });
  const tagArrs = Object.entries(tagsObj);

  return (
    <div className="tag-wrapper">
      {tagArrs.map(item => (
        <Tag
          name={item[0]}
          count={item[1]}
          id={item[0]}
          handleTagFilter={handleTagFilter}
          key={item[0]}
        />
      ))}
    </div>
  );
};
