import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { api } from "../Api/api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
`;

const Btn = styled.button`
  text-align: center;
  border-radius: 3px;
  padding: 10px 20px;
  max-width: 200px;
  font-weight: 600;
  border: 2px solid white;
  background: #a7b307;
  color: white;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 10px 25px;
`;

const Label = styled.label`
  padding: 5px;
`;

const Input = styled.input`
  width: 8cm;
`;

function CheckIn() {
  const [idAlien, setIdAlien] = useState();
  const [idParty, setIdParty] = useState();
  const [objects, setObjects] = useState("none");
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let temp = objects.replace(/\s/g, "");
    temp = temp.split(",");
    api
      .post("/register", {
        alien_id: idAlien,
        festa_id: idParty,
        objetos: temp,
      })
      .then(function (response) {
        history.push("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.error);
        }
        console.log(error.config);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FieldSet>
          <Label>
            id do alien:
            <Input
              type="text"
              onChange={(event) => setIdAlien(event.target.value)}
            />
          </Label>

          <Label>
            id da balada:
            <Input
              type="text"
              placeholder="separar os itens por virgula"
              onChange={(event) => setIdParty(event.target.value)}
            />
          </Label>

          <Label>
            {/* <p>data de nascimento:</p> */}
            itens do alien:
            <Input
              type="text"
              placeholder="separar os itens por virgula"
              onChange={(event) => setObjects(event.target.value)}
            />
          </Label>
        </FieldSet>
        <Btn type="submit">confirma</Btn>
      </Form>
    </Container>
  );
}

export default CheckIn;
