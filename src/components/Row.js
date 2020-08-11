import React from 'react';

function Row(props) {
  // eslint-disable-next-line react/prop-types
  const { year, title, content } = props.row;
  return (
    <li>
      <p className="year">{year}</p>
      <div className="experience">
        <p>
          <strong>{title}</strong>
        </p>
        <p>{content}</p>
      </div>
    </li>
  );
}

export default Row;
