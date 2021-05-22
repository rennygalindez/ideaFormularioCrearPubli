import React from 'react';

const ItemForm = ({ name, type, label, onChange, stateProperty }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        value={stateProperty[name]}
        onChange={onChange}
        type={type}
        name={name}
      />
    </div>
  );
};

export default ItemForm;
