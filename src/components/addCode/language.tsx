import React from 'react';

const Language = (props) => {
  const active = props.active && 'active';
  return (
    <div className={`singleLanguage ${active}`}>
      <img src={props.logo} alt="" />
    </div>
  );
};

export default Language;
