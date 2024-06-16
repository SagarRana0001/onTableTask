import React, { useEffect, useState, useContext } from "react";
import "./reactForm.js";

import { Container } from "../form/addTask.js";
import { Tablerow } from "./table.jsx";

function Listing() {
  const [alldata, setalldata] = useState([]);

  const deletefunc = (ind) => {
    const dltRow = alldata.filter((element, index) => element.id != ind);
    setalldata([...dltRow]);
  };

  useEffect(() => {
    setalldata(listData);
  }, []);

  const changeValue = (e, index) => {
    const { name, value } = e.target;
    let x = alldata;
    let y = x[index];
    y[name] = value;
    setalldata([...alldata]);
  };

  return (
    <>
      <Container></Container>
    </>
  );
}
export default Listing;
