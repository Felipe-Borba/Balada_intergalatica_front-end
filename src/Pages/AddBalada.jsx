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

function AddBalada() {
  const [name, setName] = useState();
  const [restrictedItems, setRestrictedItems] = useState();
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let temp = restrictedItems.replace(/\s/g, "");
    temp = temp.split(",");
    api
      .post("/party", {
        nome: name,
        itensProibidos: temp,
      })
      .then((response) => {
        history.push("/balada");
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
            Nome:
            <Input
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </Label>
          <Label>
            {/* <p>data de nascimento:</p> */}
            itens restritos:
            <Input
              type="text"
              placeholder="separar os itens por virgula"
              onChange={(event) => setRestrictedItems(event.target.value)}
            />
          </Label>
        </FieldSet>
        <Btn type="submit">Adicionar</Btn>
      </Form>
    </Container>
  );
}

export default AddBalada;
