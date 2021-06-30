import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { search } from "../Api/api";

const Item = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  padding: 10px;
  font-size: 12px;
  min-width: 10cm;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 90px;
  justify-content: flex-start;
  .text {
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
`;

const Btn = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 10px 20px;
  max-width: 200px;
  font-weight: 600;
  border: 2px solid white;
  background: #a7b307;
  color: white;
`;

function Balada() {
  const [data, setData] = useState([]);

  useEffect(() => {
    search("/party", setData);
  }, []);

  return (
    <Container>
      <h1>Baladas</h1>

      <Btn href="/addBalada">Adicionar Balada</Btn>

      {data.map((item) => {
        return (
          <Item key={item.partyId}>
            <Text>
              <span className="text">Id: {item.partyId}</span>
              <span>balada: {item.name}</span>
              <span>Itens restritos: {item.restrictedItems.join(", ")}</span>
            </Text>
          </Item>
        );
      })}
    </Container>
  );
}

export default Balada;
