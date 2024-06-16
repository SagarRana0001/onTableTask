import React from "react";
export const InputText = ({ name, value, onChange }) => {
  return (
    <>
      <input type="text" name={name} value={value} onChange={onChange} />
    </>
  );
};
