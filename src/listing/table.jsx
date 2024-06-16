import React, { useState, useEffect } from "react";

import { InputText } from "./listInput.jsx";
import {
  BtnAction,
  DltAction,
  EditAction,
  SaveAction,
  Td,
  Trrow,
} from "../form/addTask.js";
export const Tablerow = (props) => {
  const [rowCurrent, setRoCurrent] = useState({});
  const [edit, setEdit] = useState(false);
  const editFunc = () => {
    setEdit(true);
  };

  useEffect(() => {
    setRoCurrent(props.curr);
  }, [props.alldata]);

  const changeValue = (e) => {
    const { name, value } = e.target;
    setRoCurrent({ ...rowCurrent, [name]: value });
  };
  const saveFunc = (indx) => {
    setEdit(false);
    props.setfinalstore([rowCurrent]);
  };
  const clcFunc = (indx) => {
    setEdit(false);
    setRoCurrent(props.curr);
  };
  console.log(rowCurrent.deadline);
  return (
    <>
      <Trrow>
        <td>{props.index + 1}</td>
        <td>
          {edit ? (
            <InputText
              name={"task"}
              id={props.id}
              onChange={(e) => changeValue(e, props.index)}
              value={rowCurrent.task}
            />
          ) : (
            <p>{rowCurrent.task}</p>
          )}
        </td>
        <td>
          {edit ? (
            <InputText
              name={"status"}
              id={props.id}
              value={rowCurrent.status}
              onChange={(e) => changeValue(e, props.index)}
            />
          ) : (
            <p>{rowCurrent.status}</p>
          )}
        </td>
        {/* <td>
          {edit ? (
            <InputText
            //   name={"deadline"}
            //   id={props.id}
            //   value={ [rowCurrent.deadline].map(home => <div>{home.name}</div>)}
            //   onChange={(e) => changeValue(e, props.index)}
            />
          ) : (
            <p>
              {[rowCurrent.deadline].map((curr) => (
                <div>{curr}</div>
              ))}
            </p>
          )}
        </td> */}

        <Td>
          {edit ? (
            <SaveAction onClick={() => saveFunc(props.index)}>Save</SaveAction>
          ) : (
            <EditAction onClick={() => editFunc(props.curr, props.index)}>
              Edit
            </EditAction>
          )}

          {edit ? (
            <BtnAction onClick={() => clcFunc(props.index)}>Cancel</BtnAction>
          ) : (
            <DltAction onClick={() => props.deletefunc(props.curr.id)}>
              Delete
            </DltAction>
          )}
        </Td>
      </Trrow>
    </>
  );
};
