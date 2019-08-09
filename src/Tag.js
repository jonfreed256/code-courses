import React from "react";

export const Tag = ({ name, count, id, handleTagFilter }) => {
  return (
    <div>
      <button
        onClick={e => handleTagFilter(e)}
        className="tag-button"
        value={name}
        id={id}
      >
        {`${name} | ${count}`}
      </button>
    </div>
  );
};
