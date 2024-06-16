import React, { useState } from "react";
import { LabelText } from "./reactForm.js";
const Labelfield = (props) => {
  const { label } = props;
  return (
    <>
      <LabelText>{label}</LabelText>
    </>
  );
};
export default Labelfield;
