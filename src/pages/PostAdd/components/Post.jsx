import React from 'react';

export const Button = ({ buttonName, active, className, notActive }) => {
  return (
    <button onClick={active} className={className} disabled={notActive}>
      {buttonName}
    </button>
  );
};
