import React, { useState } from "react";
import {
  EditAction,
  DltAction,
  Container,
  MainDiv,
  SubmitBtn,
  TodoHeader,
  TableMainDiv,
  FormMainDiv,
  Td,
  Tr,
  Trrow,
} from "./addTask";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TableHead } from "../constand/constained.js";
const initalValues = {
  task: "",
  status: "",
  deadline: dayjs("2022-04-17T15:30"),
};

export const ReactForm = (e) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(initalValues);

  const [finalstore, setfinalstore] = useState([]);

  const formState = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const formsubmit = (e) => {
    e.preventDefault();

    let x = finalstore.map((curr, indx) => {
      if (curr.id == value.id) {
        return value;
      } else {
        return curr;
      }
    });

    if (isEdit) {
      setfinalstore(x);
    } else {
      let id = finalstore.length + 1;
      const finalValue = { ...value, id };
      setfinalstore([...finalstore, finalValue]);
      setValue(initalValues);
    }
  };
  const editBtn = (editvalue, ind) => {
    setIsEdit(true);
    setValue({ ...editvalue });
  };

  const dltBtn = (ind) => {
    const dltRow = finalstore.filter((element, index) => index !== ind);
    setfinalstore(dltRow);
  };
  return (
    <>
      <Container>
        <TableMainDiv>
          <MainDiv>
            <div>
              <TodoHeader> Todo List</TodoHeader>
            </div>
            <table>
              <Tr>
                <tr>
                  {TableHead.map((curr, index) => (
                    <>
                      <th>{curr.thead}</th>
                    </>
                  ))}
                </tr>
              </Tr>
              <tbody>
                {finalstore?.map((curr, index) => (
                  <Trrow>
                    <td>{index + 1}</td>
                    <td>{curr.task}</td>
                    <td>{curr.status}</td>
                    {/* <td>{curr.deadline}</td> */}

                    <Td>
                      <EditAction onClick={() => editBtn(curr, index)}>
                        Edit
                      </EditAction>

                      <DltAction onClick={() => dltBtn(index)}>
                        Delete
                      </DltAction>
                    </Td>
                  </Trrow>
                ))}
              </tbody>
            </table>
          </MainDiv>
        </TableMainDiv>
        <FormMainDiv>
          <form>
            <label>Task</label>
            <MainDiv>
              <TextField
                name={"task"}
                label={"Task"}
                placeholder={"Plase Enter your Task"}
                type={"text"}
                onChange={(e) => formState(e)}
                value={value.task || ""}
              />
            </MainDiv>
            <label>Status</label>
            <MainDiv>
              <TextField
                name={"status"}
                placeholder={"Plase Enter your status"}
                type={"text"}
                onChange={(e) => formState(e)}
                value={value.status || ""}
              />
            </MainDiv>
            {/* <label>Deadline</label> */}
            <MainDiv>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DateTimePicker", "DateTimePicker"]}
                >
                  <DateTimePicker
                    name="deadline"
                    defaultValue={dayjs("2022-04-17T15:30")}
                    onChange={(e) => formState(e)}
                    value={value.name || ""}
                  />
                </DemoContainer>
              </LocalizationProvider> */}
            </MainDiv>
            <MainDiv>
              <SubmitBtn onClick={formsubmit}>
                {isEdit ? "Save" : "Add Task"}
              </SubmitBtn>
            </MainDiv>
          </form>
        </FormMainDiv>
      </Container>
    </>
  );
};
