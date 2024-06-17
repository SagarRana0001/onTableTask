import React, { useEffect, useState } from "react";
import {
  Container,
  MainDiv,
  SubmitBtn,
  TodoHeader,
  TableMainDiv,
  FormMainDiv,
} from "./addTask";
import { Card, Paper, TextField } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TableHead } from "../constand/constained.js";

import { Tablerow } from "../listing/table.jsx";
const initalValues = {
  task: "",
  status: "",
  deadline: dayjs("2022-04-17T15:30"),
};
export const ReactForm = (e) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(initalValues);
  // const [valueDate, setValueDate] = React.useState(dayjs("2022-04-17T15:30"));
  const [finalstore, setfinalstore] = useState([]);
  const formState = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const formsubmit = (e) => {
    e.preventDefault();

    let id = finalstore.length + 1;
    const finalValue = { ...value, id };
    setfinalstore([...finalstore, finalValue]);
    setValue(initalValues);
    // }
  };

  return (
    <>
      <Container>
        <Paper sx={{ width: "68%" }}>
          <TableMainDiv>
            <MainDiv>
              <div>
                <TodoHeader> Todo List</TodoHeader>
              </div>
              <table>
                <thead>
                  <tr>
                    {TableHead?.map((curr, index) => (
                      <th>{curr.thead}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {finalstore?.map((curr, index) => (
                    <Tablerow
                      curr={curr}
                      id={curr.id}
                      index={index}
                      formState={formState}
                      value={value}
                      setValue={setValue}
                      // valueDate={valueDate}
                      // setValueDate={setValueDate}
                      finalstore={finalstore}
                      setfinalstore={setfinalstore}
                    />
                  ))}
                </tbody>
              </table>
            </MainDiv>
          </TableMainDiv>
        </Paper>

        <Card sx={{ width: "30%" }}>
          <FormMainDiv>
            <form>
              <label>Task</label>
              <MainDiv>
                <TextField
                  name={"task"}
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
              {/* <label>Deadline</label>
              <MainDiv>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateTimePicker", "DateTimePicker"]}
                  >
                    <DateTimePicker
                    // name="deadline"
                    // defaultValue={dayjs("2022-04-17T15:30")}
                    // value={valueDate}
                    // onChange={(newValue) => setValueDate(newValue)}
                    // onChange={(e) => formState(e)}
                    // value={value.name || ""}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </MainDiv> */}
              <MainDiv>
                <SubmitBtn onClick={formsubmit}>
                  {isEdit ? "Save" : "Add Task"}
                </SubmitBtn>
              </MainDiv>
            </form>
          </FormMainDiv>
        </Card>
      </Container>
    </>
  );
};
