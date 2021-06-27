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
  padding: 10px;
`;

const Label = styled.label`
  padding: 5px;
`;

function AddAlien() {
  const [name, setName] = useState();
  const [birthday, setBirthday] = useState();
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.post("/alien", {
      nome: name,
      dataDeNascimento: birthday,
    });
    console.log(response);
    history.push("/alien");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FieldSet>
          <Label>
            Nome:
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </Label>
          <Label>
            {/* <p>data de nascimento:</p> */}
            data de nascimento:
            <input
              type="date"
              onChange={(event) => setBirthday(event.target.value)}
            />
          </Label>
        </FieldSet>
        <Btn type="submit">Adicionar</Btn>
      </Form>
    </Container>
  );
}

export default AddAlien;
