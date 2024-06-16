import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 40px;
  font-size: 20px;
  font-weight: 500;
  font-family: sans-serif;
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  table {
    width: 100%;
  }
`;
export const InputText = styled.input`
  width: 30%;
`;
export const Td = styled.td`
  width: 100%;
  display: flex;
  gap: 10px;
`;
export const Trrow = styled.tr`
  text-align: center;
`;
export const Tr = styled.thead`
  width: 100%;
  background-color: gray;
`;
export const TableMainDiv = styled.div`
  width: 70%;
`;
export const FormMainDiv = styled.div`
  width: 30%;
`;
export const LabelText = styled.label`
  width: 30%;
  display: flex;
  justify-content: center;
`;

export const Gender = styled.label`
  width: 70%;
  display: flex;
  padding-left: 7rem;
`;
export const MainDiv = styled.div`
  width: 100%;
`;
export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 60%;
  background-color: green;
  color: #ffff;
  font-size: 18px;
  cursor: pointer;
`;
export const EditAction = styled.button`
  height: 30px;
  width: 60%;
  background-color: blue;
  color: white;
`;
export const DltAction = styled.button`
  height: 30px;
  width: 60%;
  background-color: red;
  color: white;
`;
export const SaveAction = styled.button`
  height: 30px;
  width: 100%;
  background-color: green;
  color: white;
`;
export const TodoHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
`;
