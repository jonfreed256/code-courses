import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, count, id, handleTagFilter }) => {
  return (
    <div>
      <button
        onClick={e => handleTagFilter(e)}
        className='tag-button'
        value={name}
        id={id}>
        {`${name} | ${count}`}
      </button>
    </div>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
  id: PropTypes.number,
  handleTagFilter: PropTypes.func
};

export default Tag;
