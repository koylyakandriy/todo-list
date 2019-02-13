import React from 'react';

const SearchPanel = () => {
  const searchStyle = {
    color: 'yellow',
    padding: '5px 10px'
  };
  const searchText = 'Write something';
  return <input
    placeholder={searchText}
    style={searchStyle} />;
};

export default SearchPanel;